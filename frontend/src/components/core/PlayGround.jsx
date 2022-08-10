import Header from './Header';
import { EditorStyled } from '../../styles/EditorStyled';
import { CoverStyled } from '../../styles/CoverStyled';
import CodeFrame from '../atoms/CodeFrame';
import Editor from "@monaco-editor/react";
import { useEffect, useState, useRef, forwardRef } from 'react';

const MAX_WIDTH = 750;
const MIN_WIDTH = 400;

const PlayGround = ({ code }) => {

    const [fileName, setFileName] = useState("code-shot");
    const [exporting, setExporting] = useState(false);

    const editorRef = useRef(null);
    const handleEditorMount = (editor, monaco) => {
        editorRef.current = editor; 
        editor.focus()
    }

    // Refs for trackers
    const backgroundRef = useRef(null);
    const handleRightRef = useRef(null);
    const handleLeftRef = useRef(null);

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
        automaticLayout: true,
        lineNumbers: false,
        selectOnLineNumbers: true,
    }

    useEffect(() => {
        const backgroundEl = backgroundRef.current;
        const handleRightEl = handleRightRef.current;
        const handleLeftEl = handleLeftRef.current;

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
      
        handleRightEl.addEventListener('mousedown', initResizeRight, false);
        handleLeftEl.addEventListener('mousedown', initResizeLeft, false);
      
        return () => {
            handleRightEl.removeEventListener('mousedown', initResizeRight, false);
            handleLeftEl.removeEventListener('mousedown', initResizeLeft, false);
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
                                    <div className="resize-handle-bottom"   />

                                <CodeFrame code={code}  />
                                <div className="editor_wrap">
                                    <Editor
                                        height="140px"
                                        value={"// Write your code here"}
                                        wrapperClassName="editor"
                                        className="monaco-editor" 
                                        language="javascript"
                                        loading="Loading Playground..."
                                        theme="vs-dark"
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