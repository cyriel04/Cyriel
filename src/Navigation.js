import React, { Component } from "react";
import { Menu, Icon, Button, Avatar } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const three =
	"https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aecdd0f4ea59dfb2d0622cab6e3c3901&auto=format&fit=crop&w=1355&q=80";
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
export default class Navigation extends Component {
	render() {
		return (
			<div>
				<Menu
					style={controlsProps}
					onClick={this.handleClick}
					mode="horizontal"
					theme="dark"
				>
					<Menu.Item key="mail">
						<Icon type="mail" />
						Home
					</Menu.Item>
					<SubMenu
						title={
							<span className="submenu-title-wrapper">
								<Icon type="setting" />
								Projects
							</span>
						}
					>
						<MenuItemGroup title="Item 1">
							<Menu.Item key="setting:1">Option 1</Menu.Item>
							<Menu.Item key="setting:2">Option 2</Menu.Item>
						</MenuItemGroup>
						<MenuItemGroup title="Item 2">
							<Menu.Item key="setting:3">Option 3</Menu.Item>
							<Menu.Item key="setting:4">Option 4</Menu.Item>
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
			</div>
		);
	}
}
