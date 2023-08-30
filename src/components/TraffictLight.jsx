import React from "react";
import { useState } from "react";
import "./TraffictLight.css";

const TraffictLight = () => {
    const [color, setColor] = useState("red");

    return (
    <div className="background">	
		<div id="box-out">
			<div id="box-inside">
				<div onClick={() => setColor("red")} id="circulo3" className={color === "red" ? "light circulo3" : ""}></div>
				<div onClick={() => setColor("yellow")} id="circulo2" className={color === "yellow" ? "light circulo2" : ""}></div>
				<div onClick={() => setColor("green")} id="circulo1" className={color === "green" ? "light circulo1" : ""}></div>
			</div>
		</div>
	</div>	
    );
};

export default TraffictLight;
