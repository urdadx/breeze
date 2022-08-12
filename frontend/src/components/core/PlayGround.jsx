import Header from './Header';
import { EditorStyled } from '../../styles/EditorStyled';
import { CoverStyled } from '../../styles/CoverStyled';
import CodeFrame from '../atoms/CodeFrame';
import Editor from "@monaco-editor/react";
import { useEffect, useState, useRef } from 'react';
import domtoimage from 'dom-to-image-more';
import { downloadBlob } from "../../helpers/helperFunctions";

const MAX_WIDTH = 900;
const MIN_WIDTH = 400;
const MAX_HEIGHT = 1000;
const MIN_HEIGHT = 140;

const SCALE = 1;

const PlayGround = ({ code }) => {

    const [fileName, ] = useState("code-shot");
    const [exporting, setExporting] = useState(false); 
    
    const handleEditorMount = (monaco) => {
        fetch(`./themes/${code.theme.name}.json`)
            .then(data => data.json())
            .then(data => {
                monaco.editor.defineTheme(code.theme.name.toLowerCase(), data);
                monaco.editor.setTheme(code.theme.name.toLowerCase());
        })
    }

    // Refs for trackers
    const backgroundRef = useRef(null);
    const handleLeftRef = useRef(null);
    const handleDownRef = useRef(null);

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
      const onExportCodeShot = () => {
        setExporting(true);
        
        const exportPng = takeSnapshot()
            .then(blobUrl => {
              downloadBlob(blobUrl, `${fileName}.png`);
            })
            .catch(error => {
              console.log("Error: " + error);
            })
            .finally(() => setExporting(false));
            toast.promise(exportPng, {
              loading: "Saving...",
              success: `Saved ${fileName}.png`,
              error: "Error Saving File",
            });
        }

    const HeaderProps = {
        onExportCodeShot,
    };

    const options = {
        minimap: {
            enabled: false,
        },
        quickSuggestions: {
            other: false,
            comments: false,
            strings: false
        },
        parameterHints: {
            enabled: false
        },
        guides: {
            indentation: false,
            lineHightlight: false
        },     
        automaticLayout: true,
        lineNumbers: false,
        selectOnLineNumbers: true,
    }

    const codeValue = `// Write or paste your code here \n// Use the trackers to adjust the size of the editor`

    // Resize editor in-relation to content
    useEffect(() => {

        // Refs for re-sizing
        const backgroundEl = backgroundRef.current;
        const handleLeftEl = handleLeftRef.current;
        const handleDownEl = handleDownRef.current;

        const monacoEditor = document.querySelector(".monaco-editor");
        monacoEditor.style.height = MIN_HEIGHT + "px";

        backgroundEl.style.padding = "25px"
      
        const initResizeLeft = () => {
            window.addEventListener('mousemove', resizeLeft, false);
            window.addEventListener('mouseup', stopResizeLeft, false);
        }

        const resizeLeft = (e) => {
            e.preventDefault();
            backgroundEl.style.width = ((window.innerWidth - e.clientX)  - backgroundEl.offsetLeft) + 'px';
            backgroundEl.style.padding = " 40px 40px 40px 40px";

      
            if (+(backgroundEl.style.width.replace('px', '')) < MIN_WIDTH) {
              backgroundEl.style.width = MIN_WIDTH + 'px';
            }
            if (+(backgroundEl.style.width.replace('px', '')) > MAX_WIDTH) {
              backgroundEl.style.width = MAX_WIDTH + 'px';
            }
        }

        const stopResizeLeft = () => {
            window.removeEventListener('mousemove', resizeLeft, false);
            window.removeEventListener('mouseup', stopResizeLeft, false);
        }

        const initResizeDown = () => {
            window.addEventListener('mousemove', resizeDown, false);
            window.addEventListener('mouseup', stopResizeDown, false);
        }

        const resizeDown = (e) => {
            e.preventDefault(); 
      
            backgroundEl.style.height = (e.clientY - backgroundEl.offsetTop) + 'px';
            monacoEditor.style.height = "auto";
            backgroundEl.style.padding = " 40px 40px 1px 40px";
      
            if (+(backgroundEl.style.height.replace('px', '')) < MIN_HEIGHT) {
              backgroundEl.style.height = MIN_HEIGHT + 'px';
            }
            if (+(backgroundEl.style.height.replace('px', '')) > MAX_HEIGHT) {
              backgroundEl.style.height = MAX_HEIGHT + 'px';
            }
        }

        const stopResizeDown = () => {
            window.removeEventListener('mousemove', resizeDown, false);
            window.removeEventListener('mouseup', stopResizeDown, false);
        }
       
        handleLeftEl.addEventListener('mousedown', initResizeLeft, false);
        handleDownEl.addEventListener('mousedown', initResizeDown, false)
      
        return () => {
            handleLeftEl.removeEventListener('mousedown', initResizeLeft, false);
            handleDownEl.removeEventListener('mousedown',initResizeDown, false )
        }

    }, [ backgroundRef ])


    return (
        <>
            <EditorStyled>
            <Header {...HeaderProps}   />
            <CoverStyled>
                <div className="code-wrapper">
                    <div className="codeshot-wrapper">
                        <div className="window">

                            <div ref={backgroundRef}
                                style={{
                                    background:`linear-gradient(to left, 
                                        ${code.background.bgColorOne}, ${code.background.bgColorTwo})
                                    `
                                }}
                                className="background">
                                    <div className={!exporting ? "resize-handle-left": "no-resizors"} ref={handleLeftRef}   />
                                    <div className={!exporting ? "resize-handle-bottom": "no-resizors"} ref={handleDownRef} />

                                <CodeFrame code={code}  />
                                <div className="editor_wrap">
                                    <Editor 
                                        value={codeValue}
                                        wrapperClassName="editor"
                                        beforeMount={handleEditorMount}
                                        theme={code.theme.name}
                                        className="monaco-editor" 
                                        language={code.language.name.toLowerCase()}
                                        loading="Loading Playground..."
                                        aria-label="Markdown Editor"
                                        options={options}
                                    />  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CoverStyled>

        </EditorStyled>
        </>
      );
}
 
export default PlayGround;