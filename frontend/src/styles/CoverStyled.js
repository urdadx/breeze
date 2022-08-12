import styled from "styled-components";


export const CoverStyled = styled.section`


    #cover_image {
        width: 800px;
        height: 470px;
        max-width:1200px;
        max-height:630px;
    } 

    .editor_wrap{
        height: calc(100% - 60px);
        overflow-y: auto;
        max-width:100%;
        max-height:100%;
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
     
    }

    .editor{
        width:100%;
        height:100%;

    }

    .cover-image-download{
        position: absolute;
        z-index: -10;
    } 

    .wrapper{
        margin-top:2.5rem;
        width:100%;
        height: 100%;
        display: flex;
        justify-content: center;
    } 

    .code-wrapper{
        margin-top:6.5rem;
        width:100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }

    .image-icon{
        display: flex;
        justify-content: center;
    }

    .field-label{
        cursor: pointer;
        display: flex;
        justify-content: center;
        margin:9rem auto;
        width:400px;
        padding:30px 20px;
        border:1px solid white;
        border-radius: 7px;
    }

    .file-input{
        cursor: pointer;
    }

    .cover-image-preview{
        position: relative;
        width: 825px;
        height: 510px;
        display: flex;
        justify-content: center;
        overflow: hidden;
    }


    .screenshot_wrapper{
        padding:0px;
        display:block;
        justify-content: center;
        margin:0px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        overflow: hidden;
    }

    .screenshot{
        width:  100%;
        height: auto;
        z-index: -1;
    }

    p{
        color:white;
        font-weight: 500;
        font-family: "Epilogue",sans-serif;

    }

    .file-area{
        display: flex;
        flex-direction: column;
        gap:3px;
    }


    /* CODE SHOT */

    .monaco-editor{
        
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