import React, { useState, useEffect } from "react";
import DesktopPattern from "../images/pattern-divider-desktop.svg";
import DiceButton from "../images/icon-dice.svg";
import "./Advice.css";

const Advice = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAdviceData();
  }, []);

  const getAdviceData = async () => {
    setLoading(true);
    const res = await fetch("https://api.adviceslip.com/advice");

    if (res) {
      const resJson = await res.json();

      if (res.status === 200) {
        setData(resJson);
        setLoading(false);
      } else {
        setLoading(false);
        console.log("error");
      }
    } else {
      setLoading(false);
      console.log("error");
    }
  };

  return (
    <main>
      <div className="main-container">
        <div className="advice-container">
          {loading === false && <p className="title">ADVICE #{data && data.slip && data.slip.id} </p>}
          <div className="quote">{loading ? "LOADING" : data && data.slip && data.slip.advice}</div>
        </div>

        <img src={DesktopPattern} alt=" desktop pattern" className="divider" />
        <div className="dice-btn">
          <img src={DiceButton} alt="dice" />
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/NitiMittal/Advice-Generator-fronetnd.io">Niti Mittal</a>.
      </div>
    </main>
  );
};

export default Advice;
