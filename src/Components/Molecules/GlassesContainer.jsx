import Glass from "../Atoms/Glass/Glass";
export const GlassesContainer = ({ numberOfGlasses }) => {
  const glassesNum = new Array(numberOfGlasses).fill(null).map((_, i) => i);

  const handleClick = (setIsGlassFull, isGlassFull) => {
    setIsGlassFull(!isGlassFull);
    console.log("test", isGlassFull);
  };

  return (
    <>
      {glassesNum.map((_, i) => (
        <Glass key={i} handleClick={handleClick}></Glass>
      ))}
    </>
  );
};
export default GlassesContainer;
