import { useState, useContext, useEffect } from "react";
import "./Glass.css";
import { ReactComponent as GlassEmpty } from "../../../glass_empty.svg";
import { ReactComponent as GlassFull } from "../../../glass_full.svg";
import { GlassContext } from "../../Molecules/GlassesContainer";
const Glass = ({ k }) => {
  const [isGlassFull, setIsGlassFull] = useState(true);
  const context = useContext(GlassContext);
  const dateNow = new Date();

  console.log(dateNow.toDateString());
  useEffect(() => {
    setIsGlassFull(
      localStorage.getItem(`glass_${k}`) === "true" ? true : false
    );

    if (
      localStorage.getItem(`glass_${k}`) == null ||
      localStorage.getItem("lastOpened") !== dateNow.toDateString()
    ) {
      setIsGlassFull(true);
      localStorage.setItem(`glass_` + k, true);
      localStorage.setItem("lastOpened", dateNow.toDateString());
    }

    if (localStorage.getItem("lastOpened") === null) {
      localStorage.setItem("lastOpened", dateNow.toDateString());
    }

    context.setWater(Number(localStorage.getItem("water")));
    console.log(typeof localStorage.getItem("water"));
    if (
      localStorage.getItem("water") == null ||
      localStorage.getItem("lastOpened") !== dateNow.toDateString()
    ) {
      localStorage.setItem(
        "water",
        context.numberOfGlasses * context.glassSize
      );
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
      console.log(typeof context.water);
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
