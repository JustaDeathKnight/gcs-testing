import React from "react";

const ButtonCounter = ({ name, style, value = 1, action }) => {
  return (
    <button aria-label={name} className={style} onClick={() => action(value)}>
      {name}
    </button>
  );
};

export default ButtonCounter;
