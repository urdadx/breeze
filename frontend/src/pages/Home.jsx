import CustomArea from "../components/core/CustomArea";
import Editor from "../components/core/Editor";
import LeftBar from "../components/core/LeftBar";
import { HomeStyled } from "../styles/HomeStyled";


const Home = () => {
    return ( 
        <>
        <HomeStyled>

            <div className="left-bar">
                <LeftBar />
            </div>
            <div className="customize-area">
                <CustomArea />
            </div>
            <div className="editor">
                <Editor/>
            </div>
            

        </HomeStyled>
        </>
     );
}
 
export default Home;