import { FrameStyled } from "../../styles/FrameStyled";

const Frame = ({ mode }) => {

    return ( 
        <>
        <FrameStyled>
            <div classNameName="window">
                <div className="title-bar">
                    <div className="title-buttons">
                        <div className="title-button"></div>
                        <div className="title-button"></div>
                        <div className="title-button"></div>
                </div>
                    <p className="title-text">
                            <img className="language-icon" src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
                        <span>App.js</span>
                    </p>
                </div>  
            </div>
      </FrameStyled>
        </>
     );
}
 
export default Frame;