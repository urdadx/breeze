import Editor from "../components/core/Editor";
import LeftBar from "../components/core/LeftBar";
import { HomeStyled } from "../styles/HomeStyled";
import { getTemplate } from "../helpers/templateCover";
import { useState } from "react";
import Loader from "../components/atoms/Loader";
import { useEffect } from "react";
import PlayGround from "../components/core/PlayGround";
import { codeTemplate } from "../helpers/CodeTemplate";
import styled from "styled-components";
import { textTemplate } from "../helpers/textTemplate";

const EnableScroll = styled.section`
    overflow-y: auto;
    height:100vh;
`

const Home = ({ currentState, changeState }, props) => {

    const [data, setData] = useState()
    const [children, setChildren] = useState([])
    const [code, setCode] = useState()
    const [header, setHeader] = useState()

    const currentArea = localStorage.getItem("current-area") || false;

    if(currentState === "codesnap"){
        localStorage.setItem("current-area", true)
    }

    if(currentState === "home"){
        localStorage.setItem("current-area", false)
    }
    
    useEffect(() => {
        setData(getTemplate());
        setCode(codeTemplate());
        setHeader(textTemplate());
        
    }, []);


    return ( 
        <>
        <HomeStyled>
        {
           data ? (
                <>
                    <div className="left-bar">
                        <LeftBar
                            code={code}
                            setCode={setCode}
                            {...props}
                            data={data}
                            value={currentState}
                            changeValue={changeState}
                            setData={setData}
                            children={children}
                            setChildren={setChildren}
                            header={header}
                            setHeader={setHeader}
                        />
                    </div>
                    <div className="editor">
                        {
                            currentArea === "false" &&
                        <Editor
                            {...props}
                            data={data}
                            setData={setData}
                            children={children}
                            setChildren={setChildren}
                            header={header}
                            setHeader={setHeader}
                        />
                        }
                        {
                            currentArea === "true" && 
                            <>
                            {
                                code &&
                                <>
                                <EnableScroll>
                                    <PlayGround
                                        code={code}
                                        setData={setCode}
                                        header={header}
                                        setHeader={setHeader}
                                    /> 
                                </EnableScroll>
                                </>
                                
                            }
                            </>
                        }
                    </div>
                </>
            ): 
            <div className="loader-wrapper">
                <Loader />
            </div>
        }

        </HomeStyled>
        </>
     );
}
 
export default Home;