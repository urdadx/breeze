import styled from "styled-components";


export const EditorStyled = styled.section`

    nav{
        width:100%;
        height:70px;
        border-bottom: 1.5px solid #eee;
        background-color: #F1F5FB;
    }

    .header-items{
        display:flex;
        justify-content: space-between;
    }

    .file-formats{
        padding:5px;
    }

    .dark-mode{
        cursor: pointer;
    }

    .utils{
        display: flex;
        justify-content: space-around;
        align-items:center;
        width:350px;
        padding:5px;
    }

    .action-btn{
        text-transform: capitalize;
        width:150px;
        font-size:15px;
        font-family:"Epilogue",sans-serif;
        font-weight: bold;
        padding:7px 7px;
        display: flex;
        align-items: center;
        
    }



`