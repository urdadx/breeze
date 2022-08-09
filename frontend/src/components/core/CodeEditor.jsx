import { CodeEditorStyled } from "../../styles/CodeEditorStyled";
import Label from "../atoms/Label";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import { themes, languages } from "../../utils";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Slider, InputLabel, Typography, Switch } from "@mui/material";
import CodeFrame from "../atoms/CodeFrame";

const CodeEditor = ({ code, setCode }) => {

    const [theme, setTheme] = useState(themes[0].name);
    const [language, setLanguage] = useState(languages[0].name);
    const [showAdvanced, setShowAdvanced] = useState(false)

    const handleShowAdvanced = (event) => {
        setShowAdvanced(event.target.checked);
    };

    const [color, setColor] = useState(
        code.background.color ? code.background.color : "#112231"
    );

    const [bg, setBg] = useState(
        code.background.bgColor ? code.background.bgColor : "#26a0da"
    );

    const handleChangeColor = (event) => {
        setColor(event.target.value)
        setCode({
            ...code,
            background: {
                color: event.target.value
            }
        })
    }

    const handleChangeBgColor = (event) => {
        setBg(event.target.value)
        setCode({
            ...code,
            background: {
                color: color,
                bgColor: event.target.value
            }
        })
    }
    
    return (  
        <>   
        <CodeEditorStyled>
            <div className="code-editor">
            <Label name="Theme" />
            <FormControl sx={{ mx: 2, minWidth: 310, maxWidth: 350 }} size="small" >
                <Select value={theme}>
                {
                    themes && themes.map((theme,key) => {
                        return <MenuItem key={key} value={theme.name}>{theme.name}</MenuItem>
                    })
                }
                </Select>
            </FormControl>

            <Label name="Language" />
            <FormControl sx={{ mx: 2, minWidth: 310, maxWidth: 350 }} size="small" >
                <Select value={language}>
                {
                    languages && languages.map((language,key) => {
                        return <MenuItem key={key} value={language.name}>{language.name}</MenuItem>
                    })
                }
                </Select>
            </FormControl> 

            <Label name="Editor color" />
            <Box mx={5}>       
                <div 
                 style={{
                    background: `${code.background.color}`
                 }}
                className="small_editor">
                    <CodeFrame code={code} />
                    <input
                        value={color} 
                        onChange={handleChangeColor}
                        type="color" className="editor-color" />
                    <div className="small-bg">
                    </div>
                </div>
            </Box>
            <br></br>
            <Label name="Background" />
            <Box m={2}>
                <div className="main">
                        <Typography>Background gradient</Typography>
                        <div className="bg-flex">
                            <div
                                style={{ background: `${code.background.bgColorOne}`}}
                                className="color-ball"
                            >
                            <input
                                value={bg}
                                onChange={handleChangeBgColor}
                                className="color" type="color"
                            />
                            </div>
                            <div
                                style={{ background: `${code.background.bgColorTwo}`}}
                                className="color-ball"
                            >
                            <input
                                value={bg}
                                onChange={handleChangeBgColor}
                                className="color" type="color"
                            />
                            </div>
                        </div>
                       
                </div>
            </Box>

            <Label name="Position" />
            <Box m={2} width={300}>

                <InputLabel>Position X</InputLabel>
                <Slider value={50}
                    min={-80}
                    max={80}
                    aria-label="Default" valueLabelDisplay="auto"
                />

                <InputLabel>Position Y</InputLabel>
                <Slider value={50} 
                    min={-80}
                    max={80}
                    aria-label="Default" valueLabelDisplay="auto"
                />

            </Box>
            
            <Label name="Advanced" />
            <Box className="main" m={2} width={300}>
                <Typography className="typo-bold">Advanced settings</Typography>
                <Switch color="success" onChange={handleShowAdvanced} checked={showAdvanced} />
            </Box>

            {
                showAdvanced &&
                <Box className="" m={2} width={300}>
       
                <div className="flex-sliders">
                    <div className="block-sliders">
                        <InputLabel>Scale</InputLabel>
                        <Slider 
                            aria-label="Default" valueLabelDisplay="auto"
                            step={0.05}
                            min={0}
                            max={50}
                        />
                    </div>

                    <div className="block-sliders">
                        <InputLabel>Rotate</InputLabel>
                        <Slider 
                            aria-label="Default" valueLabelDisplay="auto"
                            step={0.05}
                            min={0}
                            max={50}
                        />
                    </div>
                </div>
  
                <div className="flex-sliders">
                    <div className="block-sliders">
                        <InputLabel>Blur</InputLabel>
                        <Slider 
                            aria-label="Default" valueLabelDisplay="auto"
                            step={0.05}
                            min={0}
                            max={50}
                        />
                    </div>

                    <div className="block-sliders">
                        <InputLabel>Opacity</InputLabel>
                        <Slider 
                            aria-label="Default" valueLabelDisplay="auto"
                            step={0.05}
                            min={0}
                            max={50}
                        />
                    </div>
                </div>

            </Box>
            }
            </div>

        </CodeEditorStyled>         
        </>
    );
}
 
export default CodeEditor;