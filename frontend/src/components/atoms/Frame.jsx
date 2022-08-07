import { FrameStyled } from "../../styles/FrameStyled";

const Frame = ({ data, isEditor }) => {

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
                {
                    isEditor ?
                    <p className="title-text">
                        <img className="language-icon" 
                          src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                        /> 
                        <span>App.js</span>
                    </p> : 

                    ""
                }
                </div>  
            </div>
      </FrameStyled>
        </>
     );
}
 
export default Frame;