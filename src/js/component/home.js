import React, { useState } from "react";

//create your first component
export function Home() {
	let [lights, setLights] = useState("");

	return (
		<div>
			<div className="traffic-top"></div>
			<div className="container">
				<div
					className={
						lights === "green" ? "light greenLight" : "light"
					}
					id="green"
					onClick={() => setLights("green")}></div>
				<div
					className={
						lights === "yellow" ? "light yellowLight" : "light"
					}
					id="yellow"
					onClick={() => setLights("yellow")}></div>
				<div
					className={lights === "red" ? "light redLight" : "light"}
					id="red"
					onClick={() => setLights("red")}></div>
			</div>
		</div>
	);
}
