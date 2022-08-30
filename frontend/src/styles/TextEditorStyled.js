import styled from "styled-components";


export const TextEditorStyled = styled.section`

    width: 95%;
    background: #F1F5FB;

    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width:8px !important;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: linear-gradient(to bottom, #c84e89, #F15F79 );
    }

    .wrapper{       
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .i-wrapper{
        display: flex;
        align-items: center;
    }

    .icon{
        font-size: 17px;
    }

    .direction_wrapper{
        display: flex;
        align-items: center;
        width: 200px;
    }

    .two{
        margin-left:17px;
    }

    .icons{
        width:30px;
        border: 1px solid grey;
        display: flex;
        justify-content: center;
        padding:5px;
        height: 30px;
        border-radius:5px;
        cursor: pointer;
    }   

    .highlight{
        border: 2px solid #42a5f5;
        display: flex;
        justify-content: center;
        padding:5px;
        height: 30px;
        border-radius:5px;
        cursor: pointer;
        width:30px; 

    }

    .color{
        opacity: 0;
        cursor: pointer;

    }

    .label{
        margin-top:8px;
    }

    .color-wrapper{
        width:40px;
        height:40px;
        border-radius: 100px;
        margin-top:7px;
        padding:3px;
        border:2px solid #c84e89;

    }


`