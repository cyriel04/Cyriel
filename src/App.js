import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Fullpage, Slide, HorizontalSlider } from "fullpage-react";
const one = `https://images.unsplash.com/photo-1514544634146-c22702f74103?ixlib=rb-0.3.5&s=7d49b2bcf8200c1556780fd24d01bab4&auto=format&fit=crop&w=1350&q=80`;
const two = `https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-0.3.5&s=d6f82cfe462f2803e692c9e4f4944e0d&auto=format&fit=crop&w=1574&q=80`;
const three =
	"https://images.unsplash.com/photo-1485812262622-c6f1804c42f0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b418d17097f2bbe2ee8d0e41befb7099&auto=format&fit=crop&w=1349&q=80";
const four = `https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f1d38bbdda690e28a81673c06325075&auto=format&fit=crop&w=1778&q=80`;
const fullPageOptions = {
	// for mouse/wheel events
	// represents the level of force required to generate a slide change on non-mobile, 10 is default
	scrollSensitivity: 7,

	// for touchStart/touchEnd/mobile scrolling
	// represents the level of force required to generate a slide change on mobile, 10 is default
	touchSensitivity: 7,
	scrollSpeed: 500,
	hideScrollBars: true,
	enableArrowKeys: true
};

const horizontalSliderProps = {
	name: "horizontalSlider1", // name is required
	infinite: true // enable infinite scrolling
};

const horizontalSlides = [
	<Slide
		style={{
			backgroundImage: `url(${two})`,
			backgroundSize: "cover"
		}}
	/>,
	<Slide
		style={{
			backgroundImage: `url(${three})`,
			backgroundSize: "cover"
		}}
	/>
];
horizontalSliderProps.slides = horizontalSlides;
const slides = [
	<Slide
		style={{
			backgroundImage: `url(${one})`,
			backgroundSize: "cover"
		}}
	/>,
	<HorizontalSlider {...horizontalSliderProps} />,
	<Slide
		style={{
			backgroundImage: `url(${four})`,
			backgroundSize: "cover"
		}}
	/>
];
fullPageOptions.slides = slides;
class App extends Component {
	render() {
		return (
			<div className="App">
				<Fullpage {...fullPageOptions} />
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to
					reload.
				</p>
			</div>
		);
	}
}

export default App;
