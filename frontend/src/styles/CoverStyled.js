import styled from "styled-components";


export const CoverStyled = styled.section`


    .wrapper{
        margin-top:2rem;
        width:100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }


    .cover-image-preview{
        position: relative;
        width: 800px;
        height: 500px;
    }

    .upload-space{
        display: flex;
        justify-content: center;
        margin:9rem auto;
        width:400px;
        padding:30px 20px;
        border:1px solid white;
        border-radius: 7px;
        cursor: pointer;
    }

    .image-icon{
        width: 50px;
        margin:auto;
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