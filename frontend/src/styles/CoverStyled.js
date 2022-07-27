import styled from "styled-components";


export const CoverStyled = styled.section`


    .wrapper{
        margin-top:2rem;
        width:100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }

    .image-icon{
        width: 50px;
        margin:auto;
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
        width: 800px;
        height: 500px;
        display: flex;
        justify-content: center;
        overflow: hidden;
        transform: scale(1);
    }


    .screenshot_wrapper{
        padding:0px;
        margin:0px;
        overflow: hidden;
        transform: translateX(0%) translateY(0%) scale(0.8);
    }

    .screenshot{
        width:100%;
        height: 100%;
        max-width:100%;
        z-index: -1;
    }

    p{
        color:white;
        font-weight: 500;
    }

    .file-area{
        display: flex;
        flex-direction: column;
        gap:3px;
    }



`