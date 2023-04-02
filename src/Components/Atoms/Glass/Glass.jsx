import React from "react";
import { ReactComponent as GlassEmpty } from "../../../glass_empty.svg";
import { ReactComponent as GlassFull } from "../../../glass_full.svg";
const Glass = ({ ...props }) => {
  const [isGlassFull, setIsGlassFull] = React.useState(true);

  return <div {...props}>{isGlassFull ? <GlassFull /> : <GlassEmpty />}</div>;
};

export default Glass;
