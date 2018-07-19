import React, { Component } from "react";
import { StickyContainer, Sticky } from "react-sticky";
import { FullPage, Slide } from "react-full-page";
import { Menu, Icon, Button, Avatar } from "antd";
import "antd/dist/antd.css";
import "./App.css";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
// import { Fullpage, Slide, HorizontalSlider } from "fullpage-react";
const one = `https://images.unsplash.com/photo-1514544634146-c22702f74103?ixlib=rb-0.3.5&s=7d49b2bcf8200c1556780fd24d01bab4&auto=format&fit=crop&w=1350&q=80`;
const two = `https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-0.3.5&s=d6f82cfe462f2803e692c9e4f4944e0d&auto=format&fit=crop&w=1574&q=80`;
const three =
	"https://images.unsplash.com/photo-1485812262622-c6f1804c42f0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b418d17097f2bbe2ee8d0e41befb7099&auto=format&fit=crop&w=1349&q=80";
const four = `https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f1d38bbdda690e28a81673c06325075&auto=format&fit=crop&w=1778&q=80`;
const controlsProps = {
	style: {
		left: "50%",
		bottom: "0%",
		paddingTop: "10px",
		position: "fixed",
		transform: "translateX(-50%)"
	}
};
class App extends Component {
	render() {
		return (
			<div className="App">
				<StickyContainer>
					<Sticky>
						{({
							style,
							isSticky,
							wasSticky,
							distanceFromTop,
							distanceFromBottom,
							calculatedHeight
						}) => (
							<Menu
								style={style}
								onClick={this.handleClick}
								mode="horizontal"
								theme="dark"
							>
								<Menu.Item key="mail">
									<Icon type="mail" />Home
								</Menu.Item>
								<SubMenu
									title={
										<span className="submenu-title-wrapper">
											<Icon type="setting" />Projects
										</span>
									}
								>
									<MenuItemGroup title="Item 1">
										<Menu.Item key="setting:1">
											Option 1
										</Menu.Item>
										<Menu.Item key="setting:2">
											Option 2
										</Menu.Item>
									</MenuItemGroup>
									<MenuItemGroup title="Item 2">
										<Menu.Item key="setting:3">
											Option 3
										</Menu.Item>
										<Menu.Item key="setting:4">
											Option 4
										</Menu.Item>
									</MenuItemGroup>
								</SubMenu>
								<Menu.Item key="alipay">
									<a
										href="https://ant.design"
										target="_blank"
										rel="noopener noreferrer"
									>
										Link
									</a>
								</Menu.Item>
							</Menu>
						)}
					</Sticky>
					<FullPage>
						<Slide
							style={{
								backgroundImage: `url(${four})`,
								backgroundSize: "cover"
							}}
						>
							<Avatar
								shape="circle"
								style={{
									marginTop: 40,
									height: 300,
									width: 300
								}}
							>
								<img
									src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
									height={300}
									alt="Cyriel"
								/>
							</Avatar>
						</Slide>
						<Slide
							style={{
								backgroundImage: `url(${three})`,
								backgroundSize: "cover"
							}}
						>
							<h1>Another slide content</h1>
						</Slide>
					</FullPage>
				</StickyContainer>

				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to
					reload.
				</p>
			</div>
		);
	}
}

export default App;
