import { CodeEditorStyled } from "../../styles/CodeEditorStyled";
import Label from "../atoms/Label";
import { themes, languages } from "../../utils";
import { useState } from "react";
import { Slider, InputLabel, Typography, MenuItem, FormControl, Box, Select } from "@mui/material";
import CodeFrame from "../atoms/CodeFrame";

const CodeEditor = ({ code, setCode }) => {

    const [theme, setTheme] = useState(code.theme.name);
    const [language, setLanguage] = useState(code.language.name);
    
    const handleChangeLanguage = (e) => {
        setLanguage(e.target.value)
            setCode({
                ...code,
                language:{
                    name: e.target.value
            }
        })         
    }

    const handleChangeTheme = (e) => {
        setTheme(e.target.value)
            setCode({
                ...code,
                theme:{
                    name: e.target.value
            }
        }) 
    }

    const [color, setColor] = useState(
        code.background.color ? code.background.color : "#112231"
    );

    const [bg, setBg] = useState({
        bgOne: code.background.bgColorOne ? code.background.bgColorOne : "#FC354C",
        bgTwo: code.background.bgColorTwo ? code.background.bgColorTwo : "#0ABFBC"
    });

    const handleChangeBgColorOne = (event) => {
        setBg({
            ...bg,
            bgOne: event.target.value
        })
        setCode({
            ...code,
            background: {
                color: color,
                bgColorOne: bg.bgOne,
                bgColorTwo: bg.bgTwo
            }
        })
    }

    const handleChangeBgColorTwo = (event) => {
        setBg({
            ...bg,
            bgTwo: event.target.value
        })
        setCode({
            ...code,
            background: {
                color: color,
                bgColorOne: bg.bgOne,
                bgColorTwo: bg.bgTwo
            }
        })
    }

    const handleChangeColor = (event) => {
        setColor(event.target.value)
        setCode({
            ...code,
            background: {
                color: color,
                bgColorOne: bg.bgOne,
                bgColorTwo: bg.bgTwo
            }
        })
    }
    
    return (  
        <>   
        <CodeEditorStyled>
            <div className="code-editor">
            <Label name="Theme" />
            <FormControl sx={{ mx: 2, minWidth: 310, maxWidth: 350 }} size="small" >
                <Select onChange={handleChangeTheme} value={theme}>
                {
                    themes && themes.map((theme,key) => {
                        return <MenuItem key={key} value={theme.name}>{theme.name}</MenuItem>
                    })
                }
                </Select>
            </FormControl>

            <Label name="Language" />
            <FormControl sx={{ mx: 2, minWidth: 310, maxWidth: 350 }} size="small" >
                <Select onChange={handleChangeLanguage} value={language}>
                {
                    languages && languages.map((language,key) => {
                        return <MenuItem key={key} value={language.name}>{language.name}</MenuItem>
                    })
                }
                </Select>
            </FormControl> 

            <Label name="Header color" />
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
                        type="color" className="editor-color"
                    />
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
                                value={bg.bgOne}
                                onChange={handleChangeBgColorOne}
                                className="color" type="color"
                            />
                            </div>
                            <div
                                style={{ background: `${code.background.bgColorTwo}`}}
                                className="color-ball"
                            >
                            <input
                                value={bg.bgTwo}
                                onChange={handleChangeBgColorTwo}
                                className="color" type="color"
                            />
                            </div>
                        </div>
                       
                </div>
            </Box>
            
            <Label name="Advanced" />
  

       
                <Box m={2} width={300}>
       
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
            
            </div>

        </CodeEditorStyled>         
        </>
    );
}
 
export default CodeEditor;