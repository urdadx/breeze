import styled from "styled-components";


export const CodeEditorStyled = styled.section`

    background: #F1F5FB;
    width:100%;

    height:100vh;
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width:8px !important;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: linear-gradient(to bottom, #c84e89, #F15F79 );
    }
    
    .code-editor{
        margin-top:1.5rem;
    }

    .small_editor{
        width:260px;
        height:90px;
        border-radius: 6px;
        cursor: pointer;
    }

    .small-bg{
        width:100%;
        height:auto;
    }

    .editor-color{
        width:260px;
        height:120px;
        border-radius: 6px;
        opacity:0;
        cursor: pointer;
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

    .main{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:1rem;
        margin-bottom:1rem;
    }

    .bg-flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:65px;
    }

    .flex-sliders{
        display:flex;
        justify-content: space-between;
    }

    .block-sliders{
        display:block;
        width:120px;
        padding:5px;
    }

`