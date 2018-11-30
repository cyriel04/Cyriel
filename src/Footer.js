import React, { Component } from 'react';
import styled from "styled-components";
import { Icon } from "antd";
const StyleDiv = styled.div`
    width: 100%;
	display: flex;
    justify-content: center;
    .icon-list{
		font-size: 24px;
		display: flex;
		align-items: center;
		.icons{
			margin-left: 20px;
			cursor: pointer;
		}
	}
`;
class Footer extends Component {
    render() {
        return (
            <StyleDiv>
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
            </StyleDiv>
        );
    }
}

export default Footer;
