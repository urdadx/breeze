import styled from "styled-components";


export const PlaygroundStyled = styled.section`

    overflow-y: auto;
    height:100vh;

    .code-wrapper{
        margin-top:3.5rem;
        margin-bottom: 3.5rem;
        width:100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }

    .no-resizors{
        display: none;
    }

    .window {
        height: 100%;
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
        box-shadow: rgb(0 0 0 / 43%) 10px 10px 62px 3px;
    }   

    .background {
        width: 580px;
        height: auto;
        position: relative;
        box-sizing: border-box;
        overflow: hidden;
        /* padding:25px; */
        z-index: 10;
        
    }

    .resize-handle-left {
        position: absolute;
        left: 0;
        top: 50%;
        background-color: #ffffff;
        width: 10px;
        height: 10px;
        border-radius: 50px;
        transform: translate(-10%, -50%);
        cursor: col-resize;
        transition-duration: 300ms;
        z-index: 10;
    }

    .resize-handle-right {
        position: absolute;
        right: 0;
        top: 50%;
        background-color: #ffffff;
        width: 10px;
        height: 10px;
        border-radius: 50px;
        transform: translate(0%, -50%);
        cursor: col-resize;
        transition-duration: 300ms;
        z-index:10;
    }

    .resize-handle-bottom {
        position: absolute;
        left: 50%;
        bottom: 0;
        background-color: #ffffff;
        width: 10px;
        height: 10px;
        border-radius: 50px;
        transform: translate(-50%, 0%);
        cursor: row-resize;
        transition-duration: 300ms;
        z-index: 10;
    }

    .resize-handle-top {
        position: absolute;
        left: 50%;
        top:0;
        background-color: #ffffff;
        width: 10px;
        height: 10px;
        border-radius: 50px;
        transform: translate(-50%, 5%);
        cursor: row-resize;
        transition-duration: 300ms;
        z-index: 10;
    }

    .resize-handle-left:hover,
    .resize-handle-right:hover,
    .resize-handle-bottom:hover {
        width: 15px;
        height: 15px;
    }


`