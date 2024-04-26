"use client";

import React, { useState } from 'react';
import styles from "./CustomCounter.module.scss";
import plusIcon from "@/public/plus.svg";
import Image from 'next/image';
import minusIcon from "@/public/minus.svg";

const CustomCounter = ({ name, value, minValue, maxValue, onChange, label, step }) => {

    const rootClass = `opt-fap`;

    const [currentValue, setCurrentValue] = useState(value);

    const handleChange = (event) => {
        const newValue = parseInt(event.target.value);
        const clampedValue = Math.max(minValue, Math.min(newValue, maxValue));
        setCurrentValue(clampedValue);
        onChange(clampedValue);
      };
    
      const handleIncrement = () => {
        setCurrentValue((prevValue) => Math.min(prevValue + step, maxValue));
        onChange(currentValue + step);
      };
    
      const handleDecrement = () => {
        setCurrentValue((prevValue) => Math.max(prevValue - step, minValue));
        onChange(currentValue - step);
      };

    return (
      <>
        <div className={styles[`opt-fap-counter`]}>
          <h3>{label}</h3>
          <div className={styles[`opt-fap-counter-wrap`]}>
              
              <input
                  className={styles[`opt-fap-counter-input`]}
                  type="number"
                  name={name}
                  id={name}
                  value={currentValue}
                  onChange={handleChange}
              />
              <div className={styles[`opt-fap-counter-buttons-group`]}>
                <button className={styles[`opt-fap-counter__button`]} type="button" onClick={handleIncrement}>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="6.5" x2="13" y2="6.5" stroke="black"/>
                    <line x1="6.5" y1="-2.45876e-08" x2="6.5" y2="13" stroke="black"/>
                  </svg>
                </button>
                <button className={styles[`opt-fap-counter__button`]} type="button" onClick={handleDecrement}>
                  <svg width="13" height="2" viewBox="0 0 13 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="13" y2="0.5" stroke="black"/>
                  </svg>
                </button>
              </div>
              
          </div>
        </div>
        
      </>
        
    )
}

export default CustomCounter
