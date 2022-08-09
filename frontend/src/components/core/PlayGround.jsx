import Header from './Header';
import { EditorStyled } from '../../styles/EditorStyled';
import { CoverStyled } from '../../styles/CoverStyled';
import CodeFrame from '../atoms/CodeFrame';
import Editor from "@monaco-editor/react";
import ReactResizeDetector from 'react-resize-detector';
import { useRef } from 'react';

import { useState } from 'react';

const PlayGround = ({ code }) => {

    const [fileName, setFileName] = useState("code-shot");
    const [exporting, setExporting] = useState(false);

    const editorRef = useRef(null);
    const handleEditorMount = (editor, monaco) => {
        editorRef.current = editor; 
        editor.focus()
    }

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



    
    return (
        <>
            <EditorStyled>
            <Header {...HeaderProps}   />
            <CoverStyled>
                <div className="code-wrapper">
                    <div className="codeshot-wrapper">
                        <CodeFrame code={code}  />
                        <div className="editor_wrap">
                    
                        <Editor
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
            </CoverStyled>

        </EditorStyled>
        </>
      );
}
 
export default PlayGround;