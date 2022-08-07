import { CodeEditorStyled } from "../../styles/CodeEditorStyled";
import Label from "../atoms/Label";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem } from "@mui/material";

const CodeEditor = () => {
    return (  
        <>   
        <CodeEditorStyled>
            <div className="code-editor">
                <Label name="Theme" />
                <FormControl sx={{ p:2, minWidth: 140, maxWidth:140 }} size="small" >
 
                <InputLabel sx={{fontSize:"20px"}}>Language</InputLabel>
                <Select>
                     <MenuItem value="Github">Github</MenuItem>
                </Select>
                </FormControl>
            </div>

        </CodeEditorStyled>     
        </>
    );
}
 
export default CodeEditor;