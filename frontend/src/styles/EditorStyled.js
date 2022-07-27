import styled from "styled-components";


export const EditorStyled = styled.section`

    position:relative;

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
        padding:9px;
        display: flex;
        align-items: center;
        outline:2px solid #c84e89;
        height:40px;
    }

    .templates{
        color:#494949;
        outline:2px solid #c84e89;
    }

    .download{
        color:white;
        padding:9px;
        background: #c84e89;
        background: -webkit-linear-gradient(to left, #c84e89, #F15F79 ); 
        background: linear-gradient(to left, #c84e89, #F15F79 );
    }

    .download-formats{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

    .spacer{
        width:90%;
        height:1px;
        background-color: #eee;
    }

    .menu{
        width:250px;
    }

    .info{
        display: flex;
    }





`