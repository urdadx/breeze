import { CoverStyled } from "../../styles/CoverStyled";
import { EditorStyled } from "../../styles/EditorStyled";
import Header from "./Header";
import { useEffect, useRef, useState } from "react";
import UploadMsg from "../atoms/UploadMsg";
import { useFileUpload } from 'use-file-upload';
import toast from "react-hot-toast";
import Frame from "../atoms/Frame";
import domtoimage from 'dom-to-image-more';
import { downloadBlob } from "../../helpers/helperFunctions";

const SCALE = 4.0

const Editor = ({ data, darkMode, setDarkMode }) => {

    const [files, selectFiles] = useFileUpload();
    const [isReady, setIsReady] = useState(false);    
    const [fileName, ] = useState("breeze-shot"); 

    const backgroundRef = useRef(null)

    const takeSnapshot = async () => {
      const node = backgroundRef.current;
  
      const style = {
        transform: 'scale('+SCALE+')',
        transformOrigin: 'top left',
        width: node.offsetWidth + "px",
        height: node.offsetHeight + "px",
      }
  
      const param = {
        height: node.offsetHeight * SCALE,
        width: node.offsetWidth * SCALE,
        quality: 1,
        style
      }
  
      const base64Image = await domtoimage.toPng(node, param)
      return base64Image;
    }

    // Exporting Image to PNG
    const onExportScreenshot = () => {
      
      const exportPng = takeSnapshot()
          .then(blobUrl => {
            downloadBlob(blobUrl, `${fileName}.png`);
          })
          .catch(error => {
            console.log("Error: " + error);
          })
          toast.promise(exportPng, {
            loading: "Saving...",
            success: `Saved ${fileName}.png`,
            error: "Error Saving File",
          });
      }
    
    const HeaderProps = {
        onExportScreenshot,
        darkMode,
        setDarkMode,
    };    

    useEffect(() => {
      const coverImagePreview = document.querySelector(".cover-image-preview");

      if (data.background.type === "Solid") { 
        coverImagePreview.style.background = data.background.color1;
      } 
      else if (data.background.type === "Gradient") {
        coverImagePreview.style.background = `linear-gradient(${data.background.direction}deg, 
        ${data.background.color1}, ${data.background.color2})`;
        
      }
   
  })

    return (
        <>
        <EditorStyled>
            <Header {...HeaderProps} darkMode={darkMode}  />
            <CoverStyled>
                <div className="wrapper">
                  <div className="wrapper-two">
                      <div id="cover_image" ref={backgroundRef}  className="cover-image-preview">
                          {
                              !isReady &&
                              <div>
                                  <label 
                                    onClick={() =>
                                      selectFiles({ accept: "image/*" }, () => {
                                        setIsReady(true)
                                      })
                                    } 
                                    className="field-label"> 
                                      <UploadMsg />
                                  </label>
                              </div>
                          }
                          {
                            isReady && 
                            <div 
                            style={{

                              borderBottomLeftRadius: `${data.borderRadius.curveness}px`,
                              borderBottomRightRadius: `${data.borderRadius.curveness}px`, 
                              transform: `
                                scale(${data.position.scale}) 
                                translateX(${data.position.x}%) translateY(${data.position.y}%)`
                            }}
                            className="screenshot_wrapper">
                                  <Frame data={data} />
                                  <img
                                    style={{
                                        borderBottomLeftRadius: `${data.borderRadius.curveness}px`,
                                        borderBottomRightRadius: `${data.borderRadius.curveness}px`, 
                                    }}
                                    src={files?.source} alt="Screenshot"
                                    className="screenshot" 
                                  />
                            </div>
                          }
                      
                      </div>
                  </div>
              </div>
            </CoverStyled>

        </EditorStyled>
        </>
      );
}
    
export default Editor;