import styled from "styled-components";


export const CustomAreaStyled = styled.section`

    height:100vh;
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

`
