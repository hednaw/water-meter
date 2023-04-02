import Glass from "../Atoms/Glass/Glass";
export const GlassesContainer = ({ numberOfGlasses }) => {
  const glassesNum = new Array(numberOfGlasses).fill(null).map((_, i) => i);

  const handleClick = (index) => {
    console.log("numer indexu " + index);
  };

  return (
    <>
      {glassesNum.map((_, i) => (
        <Glass key={i} onClick={() => handleClick(i)}></Glass>
      ))}
    </>
  );
};
export default GlassesContainer;
