import React from "react";
import styles from "./ButtonsContainer.module.css";
import { useState } from "react";

const ButtonsContainer = ({ onBtnClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  const [data, setData] = useState("Enter The Text Here");
  const handleClick = (event, buttonName) => {};
  return (
    <div>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((buttonName) => (
          <button
            className={styles.button}
            onClick={() => onBtnClick(buttonName)}
          >
            {buttonName}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonsContainer;
