import { CoverStyled } from "../../styles/CoverStyled";
import { EditorStyled } from "../../styles/EditorStyled";
import Header from "./Header";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useState, useEffect } from "react";

const Editor = ({ data, setData, children, setChildren }) => {


    useEffect(() => {
        const coverImagePreview = document.querySelector(".cover-image-preview");
        const coverImageDownload = document.querySelector(".cover-image-download");
    
        if (data.background.type === "Solid") { 
          coverImagePreview.style.background = data.background.color1;
          coverImageDownload.style.background = data.background.color1;
        } else if (data.background.type === "Gradient") {
          coverImagePreview.style.background = `linear-gradient(${data.background.direction}deg, ${data.background.color1}, ${data.background.color2})`;
          coverImageDownload.style.background = `linear-gradient(${data.background.direction}deg, ${data.background.color1}, ${data.background.color2})`;
        }
    })

    return (
        <>
        <EditorStyled>
            {/* set the dark mode and download stuff here */}
            <Header  />
            <CoverStyled>
                <div className="cover-image-download"></div>
                <div className="wrapper">
                    <div className="cover-image-preview">
                        <div className="upload-space">
                            <div className="file-area">
                                <div className="image-icon">
                                    <AddPhotoAlternateIcon style={{
                                        color: "white",
                                        fontSize:"40px"
                                    }} />
                                </div>
                                <p>Click here to upload an image</p>
                                <p>Or simply <b>Drag</b> and <b>Drop</b> the file</p>
                            </div>
                        </div>

                    </div>
                </div>
            </CoverStyled>

        </EditorStyled>
        </>
      );
}
    
export default Editor;