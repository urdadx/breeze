import Editor from "../components/core/Editor";
import LeftBar from "../components/core/LeftBar";
import { HomeStyled } from "../styles/HomeStyled";
import { getTemplate } from "../helpers/templateCover";
import { useState } from "react";
import Loader from "../components/atoms/Loader";
import { useEffect } from "react";

const Home = (props) => {

    const [data, setData] = useState();
    const [children, setChildren] = useState([]);

    useEffect(() => {
        setData(getTemplate());
    }, []);

    return ( 
        <>
        <HomeStyled>
        {
           data ? (
                <>
                    <div className="left-bar">
                        <LeftBar
                            {...props}
                            data={data}
                            setData={setData}
                            children={children}
                            setChildren={setChildren}
                        />
                    </div>
                    <div className="editor">
                        <Editor
                            {...props}
                            data={data}
                            setData={setData}
                            children={children}
                            setChildren={setChildren}
                        />
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