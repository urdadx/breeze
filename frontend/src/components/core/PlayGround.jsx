import Header from './Header';
import { EditorStyled } from '../../styles/EditorStyled';
import { CoverStyled } from '../../styles/CoverStyled';
import CodeFrame from '../atoms/CodeFrame';
import Editor from "@monaco-editor/react";
import { useEffect, useState, useRef } from 'react';

const MAX_WIDTH = 900;
const MIN_WIDTH = 400;
const MAX_HEIGHT = 1000;
const MIN_HEIGHT = 140;

const PlayGround = ({ code }) => {

    const [fileName, setFileName] = useState("code-shot");
    const [exporting, setExporting] = useState(false);
 
    const editorRef = useRef(null);
    const handleEditorMount = (editor, monaco) => {
        editorRef.current = editor; 
        editor.focus()        
        fetch(`./public/themes/${code.theme.name}.json`)
            .then(data => data.json())
            .then(data => {
                monaco.editor.defineTheme(code.theme.name.toLowerCase(), data);
                monaco.editor.setTheme(code.theme.name.toLowerCase());
        })
    }

    // Refs for trackers
    const backgroundRef = useRef(null);
    const handleRightRef = useRef(null);
    const handleLeftRef = useRef(null);
    const handleDownRef = useRef(null);
    const handleUpRef = useRef(null);

    const HeaderProps = {
        exporting, 
        setExporting,
        fileName,
        setFileName
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
        automaticLayout: true,
        lineNumbers: false,
        selectOnLineNumbers: true,
    }

    const userCode = `// Write or paste your code here \n// Use the trackers to adjust the size of the editor`

    // Resize editor in-relation to content
    useEffect(() => {

        // Refs for re-sizing
        const backgroundEl = backgroundRef.current;
        const handleRightEl = handleRightRef.current;
        const handleLeftEl = handleLeftRef.current;
        const handleDownEl = handleDownRef.current;
        const handleUpEl = handleUpRef.current;

        const monacoEditor = document.querySelector(".monaco-editor");
        monacoEditor.style.height = MIN_HEIGHT + "px";

        const initResizeRight = () => {
            window.addEventListener('mousemove', resizeRight, false);
            window.addEventListener('mouseup', stopResizeRight, false);
        }

        const resizeRight = (e) => {
            e.preventDefault(); 
      
            backgroundEl.style.width = (e.clientX - backgroundEl.offsetLeft) + 'px';
      
            if (+(backgroundEl.style.width.replace('px', '')) < MIN_WIDTH) {
              backgroundEl.style.width = MIN_WIDTH + 'px';
            }
            if (+(backgroundEl.style.width.replace('px', '')) > MAX_WIDTH) {
              backgroundEl.style.width = MAX_WIDTH + 'px';
            }
        }

        const stopResizeRight = () => {
            window.removeEventListener('mousemove', resizeRight, false);
            window.removeEventListener('mouseup', stopResizeRight, false);
        }

      
        const initResizeLeft = () => {
            window.addEventListener('mousemove', resizeLeft, false);
            window.addEventListener('mouseup', stopResizeLeft, false);
        }

        const resizeLeft = (e) => {
            e.preventDefault();
            backgroundEl.style.width = ((window.innerWidth - e.clientX)  - backgroundEl.offsetLeft) + 'px';
      
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
            monacoEditor.style.height = "auto"
      
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

        const initResizeUp = () => {
            window.addEventListener('mousemove', resizeUp, false);
            window.addEventListener('mouseup', stopResizeUp, false);
        }

        const resizeUp = (e) => {
            e.preventDefault(); 
      
            backgroundEl.style.height = (e.clientY - backgroundEl.offsetTop) + 'px';
            monacoEditor.style.height = "auto"
      
            if (+(backgroundEl.style.height.replace('px', '')) < MIN_HEIGHT) {
              backgroundEl.style.height = MIN_HEIGHT + 'px';
            }
            if (+(backgroundEl.style.height.replace('px', '')) > MAX_HEIGHT) {
              backgroundEl.style.height = MAX_HEIGHT + 'px';
            }
        }

        const stopResizeUp = () => {
            window.removeEventListener('mousemove', resizeUp, false);
            window.removeEventListener('mouseup', stopResizeUp, false);
        }
      
        handleRightEl.addEventListener('mousedown', initResizeRight, false);
        handleLeftEl.addEventListener('mousedown', initResizeLeft, false);
        handleDownEl.addEventListener('mousedown', initResizeDown, false)
        handleUpEl.addEventListener('mousedown', initResizeUp, false)

      
        return () => {
            handleRightEl.removeEventListener('mousedown', initResizeRight, false);
            handleLeftEl.removeEventListener('mousedown', initResizeLeft, false);
            handleDownEl.removeEventListener('mousedown',initResizeDown, false )
            handleUpEl.removeEventListener("mousedown", initResizeUp, false)
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
                                    <div className="resize-handle-left" ref={handleLeftRef}  />
                                    <div className="resize-handle-right" ref={handleRightRef}  />
                                    <div className="resize-handle-bottom" ref={handleDownRef}   />
                                    <div className="resize-handle-top" ref={handleUpRef}  />

                                <CodeFrame code={code}  />
                                <div className="editor_wrap">
                                    <Editor 
                                        value={userCode}
                                        wrapperClassName="editor"
                                        className="monaco-editor" 
                                        language={code.language.name.toLowerCase()}
                                        loading="Loading Playground..."
                                        aria-label="Markdown Editor"
                                        options={options}
                                        onMount={handleEditorMount}
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