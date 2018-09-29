import React, { Component } from "react";
import Navigation from "./Navigation";
import "antd/dist/antd.css";
import "./App.css";

// import { Fullpage, Slide, HorizontalSlider } from "fullpage-react";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
			</div>
		);
	}
}

export default App;
