import React from "react";

const ButtonCounter = ({ name, btnstyle, value = 1, action }) => {
  return (
    <button aria-label={name} className={btnstyle} onClick={() => action(value)}>
      {name}
    </button>
  );
};

export default ButtonCounter;
