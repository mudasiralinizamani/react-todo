import React from "react";
import css from "../../../Assets/CSS/Button.module.css";
import { Link } from "react-router-dom";

const STYLES = [`${css["btn--primary"]}`, `${css["btn--outline"]}`, `${css["btn--test"]}`];

const SIZES = [`${css["btn--medium"]}`, `${css["btn--large"]}`];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  link,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <a href={link} target="_blank" className="btn-mobile">
      <button
        className={`${css.btn} ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </a>
  );
};
