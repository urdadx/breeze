import Editor from "../components/core/Editor";
import LeftBar from "../components/core/LeftBar";
import { HomeStyled } from "../styles/HomeStyled";
import { getTemplate } from "../helpers/templateCover";
import { useState } from "react";
import Loader from "../components/atoms/Loader";
import { useEffect } from "react";
import PlayGround from "../components/core/PlayGround";
import { codeTemplate } from "../helpers/CodeTemplate";

const Home = ({ currentState, changeState }, props) => {

    const [data, setData] = useState();
    const [children, setChildren] = useState([]);
    const [code, setCode] = useState()

    useEffect(() => {
        setData(getTemplate());
        setCode(codeTemplate())
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
                        />
                    </div>
                    <div className="editor">
                        {
                            currentState === "home" &&
                        <Editor
                            {...props}
                            data={data}
                            setData={setData}
                            children={children}
                            setChildren={setChildren}
                        />
                        }
                        {
                            currentState === "codesnap" && 
                            <>
                            {
                                code &&
                                <PlayGround
                                    code={code}
                                    setData={setCode}
                                /> 
                                
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