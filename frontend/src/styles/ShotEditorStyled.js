import styled from "styled-components";


export const ShotEditorStyled = styled.section`


    .shots-editor{
        margin-top:2rem;
    }

    .orientation{
        display: flex;
    }

    .gradients-div{
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;    
        grid-template-columns: 1fr 1fr 1fr ;
        flex-wrap: wrap;
        gap:2px;
        width:310px;
        height:215px;
        z-index: 1000;
    }

    .single-div{
        width:5rem;
        height:3rem;
        border-radius:0.5rem;
        cursor: pointer;
        border:1px solid #eee
    }
    
    .single-div:hover{
        border:1.5px solid black;
    }

    .main{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:1rem;
        margin-bottom:1rem;
    }

    .shadow-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:2rem;
        margin-bottom: 1.5rem;
    }

    .circular-slider{
        display: flex;
        justify-content: center;
    }

    .typo-bold{
        font-weight: bold;
        font-family: "Epilogue", sans-serif;
    }

    .color-ball{
        width:27px;
        cursor: pointer;
        height:27px;
        border-radius:50px;
    }

    .color{
        opacity: 0;
        cursor: pointer;
    }



`