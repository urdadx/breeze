import { CoverStyled } from "../../styles/CoverStyled";
import { EditorStyled } from "../../styles/EditorStyled";
import Header from "./Header";
import { useState, useEffect } from "react";

const Editor = ({ data, setData, children, setChildren}) => {


    useEffect(() => {
        const coverImagePreview = document.querySelector(".cover-image-preview");
        const coverImageDownload = document.querySelector(".cover-image-download");
    
        if (data.background.type === "solid") {
          coverImagePreview.style.background = data.background.color;
          coverImageDownload.style.background = data.background.color;
        } else if (data.background.type === "gradient") {
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
                            <h4>Upload your shit here</h4>
                        </div>

                    </div>
                </div>
            </CoverStyled>

        </EditorStyled>
        </>
      );
}
    
export default Editor;