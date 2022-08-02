import { CoverStyled } from "../../styles/CoverStyled";
import { EditorStyled } from "../../styles/EditorStyled";
import Header from "./Header";
import { useEffect, useState } from "react";
import UploadMsg from "../atoms/UploadMsg";
import { useFileUpload } from 'use-file-upload';
import toast from "react-hot-toast";
import html2canvas from "html2canvas";
import Frame from "../atoms/Frame";


const Editor = ({ data, darkMode, setDarkMode }) => {

    const [files, selectFiles] = useFileUpload();
    const [isReady, setIsReady] = useState(false);
    const [fileName, setFileName] = useState("breeze-shot");

    // Resize cover image
    const resizeCoverImage = () => {

      const cover_image = document.querySelector(".cover-image-preview");
      let scale = window.devicePixelRatio;
      cover_image.style.transform = `scale(${scale})`; 

    };
  
    // useEffect to control window resize and all
    useEffect(() => {
      resizeCoverImage();
      window.addEventListener("resize", resizeCoverImage);
    });

    const coverImage = document.querySelector(".cover-image-preview");

    const addInnerHtml = () => {
      coverImage.innerHTML = document.querySelector(
        ".cover-image-preview"
      ).innerHTML;
    };

    // download image as a .png
    const downloadAsPng = () => {
      addInnerHtml();

      const downloadImage = html2canvas(coverImage, {
        useCORS: true,
     
      }).then((canvas) => {
          const a = document.createElement("a");

          a.href = canvas.toDataURL("image/png"); // convert to dataURL
       
          a.download = fileName + ".png";
          a.click();
      });

      // toasting
      toast.promise(downloadImage, {
        loading: "Saving...",
        success: `Saved ${fileName}.png`,
        error: "Error Saving File",
      });
    };

    const HeaderProps = {
      fileName,
      setFileName,
      darkMode,
      setDarkMode,
      downloadAsPng,
    };



    useEffect(() => {
      const coverImagePreview = document.querySelector(".cover-image-preview");
      const coverImageDownload = document.querySelector(".cover-image-download");

      if (data.background.type === "Solid") { 
        coverImagePreview.style.background = data.background.color1;
        coverImageDownload.style.background = data.background.color1;
      } 
      else if (data.background.type === "Gradient") {
        coverImagePreview.style.background = `linear-gradient(${data.background.direction}deg, 
        ${data.background.color1}, ${data.background.color2})`;
        coverImageDownload.style.background = `linear-gradient(${data.background.direction}deg,
        ${data.background.color1}, ${data.background.color2})`;
      }
   
      
  })

    return (
        <>
        <EditorStyled>
            <Header {...HeaderProps} darkMode={darkMode}  />
            <div id="cover_image"  className="cover-image-download"></div>
            <CoverStyled>
                <div className="wrapper">
                  <div className="wrapper-two">
                      <div id="cover_image"  className="cover-image-preview">
                          {
                              !isReady &&
                              <label onClick={() =>
                                  selectFiles({ accept: "image/*" }, () => {
                                    setIsReady(true)
                                  })
                                } className="field-label"> 
                                  <UploadMsg />
                              </label>
                          }
                          {
                            isReady && 
                            <div 
                            style={{
                              
                              transform: `scale(${data.position.scale})`
                            }}
                            className="screenshot_wrapper">
                                  <Frame />
                                  <img
                                    style={{
                                      width:`${data.size.width}%`,
                                      height:`${data.size.height}%`,
                                    }}
                                    src={files?.source} alt="Screenshot"
                                    className="" 
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