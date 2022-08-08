import Header from './Header';
import { EditorStyled } from '../../styles/EditorStyled';
import { CoverStyled } from '../../styles/CoverStyled';
import CodeFrame from '../atoms/CodeFrame';
import Editor, { useMonaco } from "@monaco-editor/react";

import { useState } from 'react';

const PlayGround = ({ code }) => {

    const [fileName, setFileName] = useState("code-shot");
    const [exporting, setExporting] = useState(false);

    const monaco = useMonaco();

    const HeaderProps = {
        exporting, 
        setExporting,
        fileName,
        setFileName
    };


    
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
                            language="markdown"
                            height="75vh"
                            loading={'Loading Playground...'}
                            theme="vs-dark"
                            aria-label="Markdown Editor"
                            options={{
                                minimap: {
                                    enabled: false,
                                },
                                lineNumbers: false,
                            }}
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