import styled from "styled-components";


export const BookmarkStyled = styled.section`

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
        height:100%;
        display:flex;
        justify-content:start;
        align-items: center;
        flex-direction: column;
        color: #222;

    }

    .bookmarks_title{
        font-weight:bold;
        font-size:1rem ;
        margin-top:1.25rem;
        margin-left:0.735rem;
    }

    .subtitle{
        font-size:0.785rem;
        color: #555;
        margin-bottom: 0.785rem;
        text-align: center;
    }

    .wrapper{
        width:100%;
        height:100%;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;

    }

    .button{
        background-color: white;
        margin:0.25rem ;
        border-radius: 3px;
        padding:0.25rem;

    }

    .image{
        height:60px;
        width:60px;
        border-radius: 3px;
    }

    .book_img{
        color: #F5BA31;
        text-transform: capitalize;
        border-radius: 1.25rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0.35rem;
        right: 0.25rem;

        /* text-[#F5BA31] duration-500 text-lg capitalize rounded-md font-semibold flex items-center justify-center menu-animation-hover poppins dark:bg-[#1F1F1F] border border-transparent dark:border-[#555] absolute top-1 right-1 */
    }

 
    .icon{
        font-size: 0.735rem;
    }
    
    .error{
        margin-top: 1.5rem;
        width:270px;
        margin:auto;


    }

`