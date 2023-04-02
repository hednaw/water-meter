import Glass from "../Atoms/Glass/Glass";
export const GlassesContainer = ({ numberOfGlasses }) => {
  const glassesNum = new Array(numberOfGlasses).fill(null).map((_, i) => i);

  return (
    <>
      {glassesNum.map((_, i) => (
        <Glass key={i}></Glass>
      ))}
    </>
  );
};
export default GlassesContainer;
