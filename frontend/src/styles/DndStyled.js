import styled from "styled-components";


export const DndStyled = styled.section`

    .resizerComp:hover {
        display: block !important;
    }

    .resizer{
        display: block ;

    }

    .wrapper{
        width:100%;
        height:90%;
        position: absolute;
        top:0px;
        left:0px;
        border-radius: 3px;
        border: 3px solid #4286f4;  
        object-fit: content;

        
    }

    .dont-show{
        display: none !important;
    }

    .point{
        position: absolute;
        border-radius: 1000px;
        height:15px;
        width:15px;
        background-color: white;
        border:1px solid #4286f4;
    }

    .top-left{
        overflow: visible;
        top: -7.5px;
        left:-7.5px;
    }

    .top-right{
        top: -7.5px;
        right:-7.5px;
    }


    .bottom-left{
        left: -7.5px;
        bottom: -7.5px;
    }


    .bottom-right{
        right:-7.5px;
        bottom: -7.5px;
    }

    .delete-btn{
        position: absolute;
        right:0;
        top:-50px;
        font-size: 11px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        padding-left:0.735rem;
        padding-right:0.735rem;
        z-index: 10;
        border-radius: 4px;
        background-color: red;
        cursor: pointer;
        color:white;
    }

    .delete:hover{
        background-color: #f28282;
    }

`