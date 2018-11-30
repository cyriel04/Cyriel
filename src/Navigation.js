import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { slide as Menus } from "react-burger-menu";
import styled from "styled-components";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const StyleMenu = styled.div`
	position: fixed;
	width: 100%;
	z-index: 1000;
	display: flex;
	background: #001529;
	justify-content: space-between;
	.container{
		width: 100%;
		display: flex;
		justify-content: space-between;
		max-width: 1200px;
		margin: 0 auto;
	}
	.icon-list{
		font-size: 24px;
		display: flex;
		align-items: center;
		.icons{
			margin-left: 30px;
			cursor: pointer;
		}
	}
	.big-menu{
		margin-right: 30px;
	}
	.bm-burger-button, .burger-menu, .bm-overlay{
		display: none
	}
	@media screen and (max-width: 700px) { 
		.big-menu, .icon-list{
			display: none
		}

		.burger-menu, .bm-burger-button{
			display: block
		}
		.bm-item {
		display: inline-block;
		/* Our sidebar item styling */
		text-decoration: none;
		margin-bottom: 10px;
		color: #d1d1d1;
		transition: color 0.2s;
		}

		/* Change color on hover */
		.bm-item:hover {
		color: white;
		}

		/* The rest copied directly from react-burger-menu docs */

		/* Position and sizing of burger button */
		.bm-burger-button {
		position: fixed;
		width: 36px;
		height: 30px;
		right: 36px;
		top: 36px;
		}

		/* Color/shape of burger icon bars */
		.bm-burger-bars {
		background: #001529;
		}

		/* Position and sizing of clickable cross button */
		.bm-cross-button {
		height: 24px;
		width: 24px;
		}

		/* Color/shape of close button cross */
		.bm-cross {
		background: #bdc3c7;
		}

		/* General sidebar styles */
		.bm-menu {
		background: #373a47;
		padding: 2.5em 1.5em 0;
		font-size: 1.15em;
		
		}

		/* Morph shape necessary with bubble or elastic */
		.bm-morph-shape {
		fill: #373a47;
		}

		/* Wrapper for item list */
		.bm-item-list {
		color: #b8b7ad;
		}
		/* Styling of overlay */
		.bm-overlay {
		background: rgba(0, 0, 0, 0.3);
		}
	}
`;
export default class Navigation extends Component {
	render() {
		return (
			<StyleMenu >
			<div className="container"> 
				<div className="icon-list">
				<a href="https://www.facebook.com/cyriel04">
					<Icon type="facebook" className="icons"/> 
				</a>
				<a href="https://www.twitter.com/lelmebedaone">
					<Icon type="twitter" className="icons"/>
				</a>
				<a href="https://www.gitlab.com/cyriel04">
					<Icon type="gitlab" className="icons"/>
				</a>
				</div>
				<div>
					<Menu
						className="big-menu"
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

					<Menus right className="burger-menu">
						<a className="menu-item" href="/">
							Home
						</a>
						<a className="menu-item" href="/burgers">
							Burgers
						</a>
						<a className="menu-item" href="/pizzas">
							Pizzas
						</a>
						<a className="menu-item" href="/desserts">
							Desserts
						</a>
					</Menus>
				</div>
			</div>
			</StyleMenu>
		);
	}
}
