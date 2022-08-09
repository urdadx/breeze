import styled from "styled-components";


export const CoverStyled = styled.section`

    #cover_image {
        width: 800px;
        height: 470px;
        max-width:1200px;
        max-height:630px;
    } 


    .monaco-editor{
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        font-family:"Epilogue";
        height:140px;
    }

    .editor_wrap{
        overflow: hidden;
        width:400px;
        height:120px;
        max-width:100%;
        max-height:100%;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
     
    }

    .editor{
        width:100%;
        height:100%;
        position: absolute !important; 
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
    }

    .file-area{
        display: flex;
        flex-direction: column;
        gap:3px;
    }







`