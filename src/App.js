import React, { Component } from "react";
import Navigation from "./Navigation";
import "antd/dist/antd.css";
import "./App.css";
import Page from "./Page";

// import { Fullpage, Slide, HorizontalSlider } from "fullpage-react";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<Page />
			</div>
		);
	}
}

export default App;
