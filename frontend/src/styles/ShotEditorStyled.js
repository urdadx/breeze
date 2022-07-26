import styled from "styled-components";


export const ShotEditorStyled = styled.section`


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
        height:235px;
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



`