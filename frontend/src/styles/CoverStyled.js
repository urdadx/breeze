import styled from "styled-components";


export const CoverStyled = styled.section`
 
    #cover_image {
        width: calc(100vw - 40vw);
        height: calc(100vh - 25vh);
        max-width:1200px;
        max-height:630px;
    } 

    .cover-image-download{
        position: absolute;
        z-index: -10;
    } 

    .wrapper{
        margin-top:7vh;
        width:100%;
        height: 100%;
        display: flex;
        justify-content: center;
    } 

    .code-wrapper{
        margin-top:4.5rem;
        margin-bottom: 3.5rem;
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
        margin:22vh auto;
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

    .main_wrapper{
        width: 100%;
        height:auto;
        padding:0px;
        margin: 0px;
    }

    .screenshot_wrapper{
        height:auto;
        object-fit: cover;
        display:block;
        justify-content: center;
        overflow: hidden;
        padding:0px;
        margin: 0px;
    }

    .screenshot{
        width:  100%;
        height: 100%;
        background-size: cover;
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