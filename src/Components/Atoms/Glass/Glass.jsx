import { useState, useContext, useEffect } from "react";
import "./Glass.css";
import { ReactComponent as GlassEmpty } from "../../../glass_empty.svg";
import { ReactComponent as GlassFull } from "../../../glass_full.svg";
import { GlassContext } from "../../Molecules/GlassesContainer";
const Glass = ({ k }) => {
  const [isGlassFull, setIsGlassFull] = useState(true);
  const context = useContext(GlassContext);
  useEffect(() => {
    var now = new Date();

    let myCookie = document.cookie;
    now.setDate(now.getDate() + 1);
    now.setHours(0, 0, 0, 0);

    setIsGlassFull(
      localStorage.getItem(`glass_${k}`) === "true" ? true : false
    );

    if (localStorage.getItem(`glass_${k}`) == null) {
      setIsGlassFull(true);
      localStorage.setItem(`glass_` + k, true);
    }

    context.setWater(Number(localStorage.getItem("water")));
    console.log(typeof localStorage.getItem("water"));
    if (localStorage.getItem("water") == null) {
      localStorage.setItem(
        "water",
        context.numberOfGlasses * context.glassSize
      );
    }


    if (myCookie === "") {
      localStorage.clear();
      document.cookie = `Opened=yes; expires=${now};`;
    }
  }, []);

  const clickHandler = () => {
    console.log(context.numberOfGlasses * context.glassSize);
    if (context.water < 0) {
      context.setWater(0);
    } else if (context.water > context.numberOfGlasses * context.glassSize) {
      console.error("More water than max");
    }

    setIsGlassFull(!isGlassFull);
    localStorage.setItem(`glass_` + k, !isGlassFull);
    if (isGlassFull) {
      context.setWater(Number(context.water) - context.glassSize);
      localStorage.setItem("water", context.water - context.glassSize);
    } else {
      context.setWater(context.water + context.glassSize);
      localStorage.setItem("water", context.water + context.glassSize);
    }
  };

  return (
    <div onClick={clickHandler}>
      {isGlassFull ? <GlassFull /> : <GlassEmpty />}
    </div>
  );
};

export default Glass;
