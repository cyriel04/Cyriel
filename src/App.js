import React, { Component } from "react";
import Navigation from "./Navigation";
import "antd/dist/antd.css";
import "./App.css";
import Page from "./Page";
import Footer from "./Footer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<Page />
				<Footer />
			</div>
		);
	}
}

export default App;
