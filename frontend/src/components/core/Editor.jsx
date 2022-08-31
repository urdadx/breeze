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
import { hexToRGB } from "../../utils";
import Dnd from "../utils/Dnd";

const SCALE = 4.5

const Editor = ({ data, darkMode, setDarkMode, header, Code, children }) => {

    const [files, selectFiles] = useFileUpload();
    const [isReady, setIsReady] = useState(false);    
    const [fileName, ] = useState("breeze-shot"); 
    const rgbValue = hexToRGB(data.shadow.color);
    const [isVisible, setIsVisible] = useState(header.visible.status)
    
    const backgroundRef = useRef(null);

    // console.log(header.visible.status)

    const textStyles = {

      fontSize: `${header.style.size}px`,
      color: header.color,
      fontStyle: header.style.italic ? "italic" : "normal",
      fontFamily: header.style.fontFamily,
      fontWeight: header.style.bold ? "bold" : "300",
      textAlign: "center",
      paddingTop: `${header.style.spacing}px`

    }

    const subStyles = {
      fontSize: `${header.style.size - 5}px`,
      color: header.color,
      fontStyle: header.style.italic ? "italic" : "normal",
      fontFamily: header.style.fontFamily,
      fontWeight: header.style.bold ? "bold" : "300",
      textAlign: "center",
      paddingBottom:  `${header.style.spacing}px`
    }

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

    const screenshotStyles = {
      boxShadow: `
        ${data.shadow.offsetX}px ${data.shadow.offsetY}px 
        ${data.shadow.blur}px 0px 
        rgba(${rgbValue.r},${rgbValue.g},${rgbValue.b},${data.shadow.opacity})`,  
      borderBottomLeftRadius: `${data.borderRadius.curveness}px`,
      borderBottomRightRadius: `${data.borderRadius.curveness}px`, 
      transform: `
        scale(${data.position.scale}) 
        translateX(${data.position.x}%) translateY(${data.position.y}%)`
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
            <Header {...HeaderProps} darkMode={darkMode} />
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
                            <>
                            <div className="main_wrapper">
                              {
                                header.visible.status ? 
                                <>
                                  <p style={textStyles}>{header.text.title}</p>
                                  <p style={subStyles}>{header.text.subtitle}</p>
                                </> : ""
                              }

                              {
                                children.map((child, key) => (
                                  <div style={{zIndex:-1, overflow:"hidden"}}>

                                   <Dnd key={key}>{child.component}</Dnd>  
                                  </div>
                                ))
                              }
                              {Code()}
                            <div 
                              style={screenshotStyles}
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
                            </div>
                            </>
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