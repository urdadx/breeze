import { FrameStyled } from "../../styles/FrameStyled";

const CodeFrame = ({ code }) => {

    return ( 
        <>
        <FrameStyled>
            <div className="code-window" style={{background: code.background.color}} >
                <div className="title-bar">
                    <div className="title-buttons">
                        <div className="title-button"></div>
                        <div className="title-button"></div>
                        <div className="title-button"></div>
                </div>  
                </div>  
            </div>
      </FrameStyled>
        </>
     );
}
 
export default CodeFrame;