import React from "react";
import css from "../../../Assets/CSS/HeroSection.module.css";
import { Button } from "./Button.js";

function HeroSection({title1, title2}) {
	return (
		<div className={css["hero-container"]}>
			<h1>{title1}</h1>
			<p>{title2}</p>
			<div className={css["hero-btns"]}>

			</div>
		</div>
	);
}

export default HeroSection;
