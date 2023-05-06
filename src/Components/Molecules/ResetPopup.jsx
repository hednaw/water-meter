import React from "react";

var now = new Date();

const ResetPopup = () => {
  const HandleClick = () => {
    localStorage.clear();
    document.cookie = `Opened=yes; expires=${now};`;
  };

  return (
    <div className="container">
      <button className="resetBtn" onClick={HandleClick}>RESET</button>
    </div>
  );
};

export default ResetPopup;
