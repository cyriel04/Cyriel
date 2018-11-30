import React, { Component } from 'react';
import styled from "styled-components";
const three =
	"https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f1d38bbdda690e28a81673c06325075&auto=format&fit=crop&w=1778&q=80";
const StyleDiv = styled.div`
    width: 100%;
    max-width: 1400px;
    img {
        width: 100%;
        max-width: 1400px;
    }
    h1{
        position: absolute;
        top: 40%;
        color: white;
        left: 8%;
        font-size: 48px;
        font-weight: 300;
        @media screen and (max-width: 700px) {
            top: 20%;
            left: 10%;
            font-size: 32px;
        }
    }
`;
    class Page extends Component {
    render() {
        return (
            <StyleDiv >
                <img src={three} alt="Image" />
                <h1> Hi, I'm Cyriel </h1>
            </StyleDiv>
        );
    }
}

export default Page;
