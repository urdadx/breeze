import styled from "styled-components";


export const CoverStyled = styled.section`

    #cover_image {
        width: 800px;
        height: 470px;
        max-width:1200px;
        max-height:630px;
    } 

    .watermark{
        position: absolute;
        z-index:10;
        width:auto;
        padding:7px;
        text-align: center;
        border-radius:5px;
        height:auto;
        font-weight: 600;
        font-size:10px;
        background-color: white;
        color:grey;
        margin-top:27.5rem;
        margin-left:42rem;
        cursor:pointer;
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
    }

    .file-area{
        display: flex;
        flex-direction: column;
        gap:3px;
    }

    .wrapper-two{

    } 



`