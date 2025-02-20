import styled from "styled-components";


export const FrameStyled = styled.section`

    .window-light {
        height: 100%;
        width: 100%;
        overflow: hidden;
        background: #EDF2F7; 
        border-top-left-radius:5px;
        border-top-right-radius: 5px;
    }

    .code-window{
        height: 100%;
        width: 100%;
        overflow: hidden;
        border-top-left-radius:5px;
        border-top-right-radius: 5px;
    }

    .window-dark{
        height: 100%;
        width: 100%;
        overflow: hidden;
        background: black; 
        box-shadow: rgb(0 0 0 / 43%) 10px 10px 62px 3px;
        border-top-left-radius:5px;
        border-top-right-radius: 5px;
    }

    .title-bar {
        height: 25px;
        background-color: rgb(231 231 231 / 6%);
        position: relative;
    }

    .title-text {
        color: #afafaf;
        position: absolute;
        left: 80px;
        bottom: 0;
        margin: 0;
        padding: 7px 16px;
        font-size: 15px;
        min-width: 10px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title-text span {
        outline: none;
    }

    .title-text img {
        width: 20px;
        margin-right: 10px;
    }

    .title-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
    }

    .title-button {
        background-color: #3a3a3a;
        width: 10px;
        height: 10px;
        border-radius: 50px;
        margin: 0 5px;
    }

    .title-button:nth-child(1) {
        background-color: #ff5656;
    }
    .title-button:nth-child(2) {
        background-color: #ffbc6a;
    }
    .title-button:nth-child(3) {
        background-color: #67f772;
    }


`