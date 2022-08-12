import { FrameStyled } from "../../styles/FrameStyled";

const Frame = ({ data }) => {

    return ( 
        <>
        <FrameStyled>
            <div  className={data.frame.type === "MacOS" ? "window-light" : "window-dark"}>
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
 
export default Frame;