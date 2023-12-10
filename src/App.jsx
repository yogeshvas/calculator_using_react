import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  const onBtnClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      setCalVal(eval(calVal));
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onBtnClick={onBtnClick} />
    </div>
  );
}

export default App;
