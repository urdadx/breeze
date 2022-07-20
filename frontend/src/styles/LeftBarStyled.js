import styled from "styled-components";

export const LeftBarStyled = styled.section`
    width:100px;
    height:100vh;
    display: flex;
    flex-direction: row;

    .accent-color-bar{
        width:13px;
        height:100vh;
        background: #c84e89;
        background: -webkit-linear-gradient(to left, #c84e89, #F15F79 ); 
        background: linear-gradient(to left, #c84e89, #F15F79 );
    }

    .icons{
        display: flex;
        flex-direction: column;   
    }

    .logo-name{
        color:#c84e89;
        font-weight:bold;
    }

    .logo{
        width:50px;
        margin:1.5em auto;
        margin-bottom: 2.5rem;
        border:3px solid #c84e89;
        padding:20px 5px 20px 5px;
    }

    .tab{
        height:75px;
    }


    .tab-name{
        color:grey;
        font-size:14px;
        text-transform: lowercase;
    }




`