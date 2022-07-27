import { CoverStyled } from "../../styles/CoverStyled";
import { EditorStyled } from "../../styles/EditorStyled";
import Header from "./Header";
import { useEffect, useState } from "react";
import UploadMsg from "../atoms/UploadMsg";
import { useFileUpload } from 'use-file-upload'


const Editor = ({ data, setData, children, setChildren }) => {

    const [files, selectFiles] = useFileUpload();
    const [isReady, setIsReady] = useState(false);
    




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
            <Header  />
            <CoverStyled>
                <div className="cover-image-download"></div>
                <div className="wrapper">
                    <div className="cover-image-preview">
                        {
                            !isReady &&
                            <label onClick={() =>
                                selectFiles({ accept: "image/*" }, ({ name, size, source, file }) => {
                                  setIsReady(true)
                                })
                              } className="field-label"> 
                                <UploadMsg />
                            </label>
                        }
                        {
                          isReady && 
                          <div className="screenshot_wrapper">
                                <img src={files?.source} alt="Screenshot"className="screenshot" />
                          </div>
                        }
                    </div>
                </div>
            </CoverStyled>

        </EditorStyled>
        </>
      );
}
    
export default Editor;