import styled from "styled-components";


export const CoverStyled = styled.section`

    #cover_image {
        width: 820px;
        height: 520px;
        max-width:1200px;
        max-height:630px;
        transform: scale(0.55);
    } 

    .cover-image-download{
        position: absolute;
        z-index: -10;
    } 

     .wrapper{
        margin-top:1.5rem;
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
        transform: translateX(16%) translateY(20%); 
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


    /* .container{
        width:100%;
        height:100%;
        overflow:hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }




    .wrapper{
        transform: scale(0.95);
    }

    #cover_image_preview{
        background:blue;
        position: relative;
        overflow: hidden;
        user-select: none;
    }

    .overlay {
        height: 630px;
        width: 1200px;
        z-index: -1;
        
    }



    @media (min-width:1024px){
        .wrapper{
            transform:scaleX(0.85) scaleY(0.35)
        }
    } */






`