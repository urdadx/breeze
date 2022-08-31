import styled from "styled-components";


export const AssetStyled = styled.section`
    
    background: #F1F5FB;
    overflow-y: scroll;
    overflow-x: hidden;
    width:100%;

    ::-webkit-scrollbar {
        width:8px !important;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: linear-gradient(to bottom, #c84e89, #F15F79 );
    }

    .main_wrapper{
        width:100%;
        height:auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding:0.135rem;
    }

    .search_bar{
        margin-top:0.735rem;
        background-color: white;
        width:90%;
        font-family: "Epilogue", sans-serif;
    }

    .loader_wrapper{
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        height:auto;
        margin-top:0.5rem;
    }

    .btn{
        background-color: white;
        margin:0.2rem;
        padding:5px;
        border-radius:5px;
    }
    
    .image{
        height:60px;
        width:60px;
    }

    .bookmarked{
        color:#F5BA31;
        font-size:15px;
        text-transform: capitalize;
        border-radius: 5px;
        font-weight:500;
        display: flex;
        align-items: center;
        font-family: "Poppins", sans-serif;
        border:transparent;
        position: absolute;
        top:0.25rem;
        right:0.25rem;
    }

    .bm-icon{
        font-size:15px;

    }

    .bm-icon-2{
        font-size:15px;
    }

    .wrapper{
        margin-top:0.5rem;
    }

    .change_btn{
        background-color: white;
        border-radius: 5px;
        padding:0.5rem;
        display: block;
        margin:0.5rem;
        margin-top:0.75rem;
        margin-bottom: 0.75rem;
    }

    .cover_wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top:1px solid #ddd;
        padding-top:0.5rem;

    }


    .cover_title{
        font-size: 16px;
        text-transform: capitalize;
        font-weight: bold;

    }

    .see_more{
        font-size:15px;
        color:#666;
        display: flex;
        align-items: center;
        text-transform:capitalize;

    }



`