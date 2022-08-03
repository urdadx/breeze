import styled from "styled-components";

export const LeftBarStyled = styled.section`
    width:450px;
    height:100vh;   
    display: flex;
    flex-direction: row;
    border-right: 1px solid #eee;

    .accent-color-bar{
        width:10px;
        height:100vh;
        background: #c84e89;
        background: -webkit-linear-gradient(to bottom, #c84e89, #F15F79 ); 
        background: linear-gradient(to bottom, #c84e89, #F15F79 );
    }

    .icons{
        display: flex;
        flex-direction: column; 
        border-right:0.2px solid #eee;
    }

    .logo-name{
        color:#c84e89;
        font-weight:bold;
    }

    .logo{
        width:45px;
        margin:1.2rem auto;
        margin-bottom: 0.2rem;
    }

    .logo-title{
        font-family: "Epilogue",sans-serif;
        color:#c84e89;
        font-weight: bold;
        text-align: center;
    }

    .title-wrapper{
        margin-bottom: 1rem;
    }

    .tab{
        height:75px;
    }

    .tab-name{
        color:grey;
        font-size:12px;
        text-transform: lowercase;
    }



`