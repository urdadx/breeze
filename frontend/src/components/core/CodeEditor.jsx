import { CodeEditorStyled } from "../../styles/CodeEditorStyled";
import Label from "../atoms/Label";
import { themes } from "../../utils";
import { useState } from "react";
import { Slider, InputLabel, Typography, MenuItem, FormControl, Box, Select } from "@mui/material";
import CodeFrame from "../atoms/CodeFrame";
import { LANGUAGE } from "../../utils";

const CodeEditor = ({ code, setCode }) => {

    const [theme, setTheme] = useState(code.theme.name);
    const [currentLang, setCurrentLang] = useState(code.language.name);
    const [languages, ] = useState(Object.keys(LANGUAGE))

    // Advanced settings
    const [scale, setScale] = useState(
        code.advanced.scale ? code.advanced.scale : 1
    )
    const [borderRadius, setBorderRadius] = useState(
        code.advanced.borderRadius ? code.advanced.borderRadius : 6
    )
    const [opacity, setOpacity] = useState(
        code.advanced.opacity ? code.advanced.opacity : 1
    )
    const [rotate, setRotate] = useState(
        code.advanced.rotate ? code.advanced.rotate : 0
    )
    const [color, setColor] = useState(
        code.background.color ? code.background.color : "#112231"
    )
    const [bg, setBg] = useState({
        bgOne: code.background.bgColorOne ? code.background.bgColorOne : "#FC354C",
        bgTwo: code.background.bgColorTwo ? code.background.bgColorTwo : "#0ABFBC"
    })

    const handleChangeScale = (e, newValue) => {
        e.preventDefault()
        setScale(newValue);
        setCode({
            ...code,
            advanced: {
                borderRadius: borderRadius,
                opacity: opacity,
                scale: scale,
                rotate: rotate
            },
        })
    }

    const handleChangeRotate = (e, newValue) => {
        e.preventDefault()
        setRotate(newValue);
        setCode({
            ...code,
            advanced: {
                borderRadius: borderRadius,
                opacity: opacity,
                scale: scale,
                rotate: rotate
            },
        })
    }

    const handleChangeBorderRadius = (e, newValue) => {
        e.preventDefault()
        setBorderRadius(newValue);
        setCode({
            ...code,
            advanced: {
                borderRadius: borderRadius,
                opacity: opacity,
                scale: scale,
                rotate: rotate
            },
        })
    }

    const handleChangeOpacity = (e, newValue) => {
        e.preventDefault()
        setOpacity(newValue);
        setCode({
            ...code,
            advanced: {
                borderRadius: borderRadius,
                opacity: opacity,
                scale: scale,
                rotate: rotate
            },
        })
    }
    
    const handleChangeLanguage = (e) => {
        setCurrentLang(e.target.value)
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
                <Select onChange={handleChangeLanguage} value={currentLang}>
                {
                    languages && languages.map((language,key) => {
                        return <MenuItem key={key} value={language}>{language}</MenuItem>
                    })
                }
                </Select>
            </FormControl>      

            <Label name="Header color" />
            <Box mx={5}>       
                <div 
                 style={{
                    background: color
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
                                style={{ background: bg.bgOne}}
                                className="color-ball"
                            >
                            <input
                                value={bg.bgOne}
                                onChange={handleChangeBgColorOne}
                                className="color" type="color"
                            />
                            </div>
                            <div
                                style={{ background: bg.bgTwo}}
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
                        <Slider value={scale}
                            onChange={handleChangeScale}
                            aria-label="Default" valueLabelDisplay="auto"
                            step={0.0001}
                            min={0}
                            max={1.2}
                        />
                    </div>

                    <div className="block-sliders">
                        <InputLabel>Rotate</InputLabel>
                        <Slider value={rotate}
                            onChange={handleChangeRotate}
                            aria-label="Default" valueLabelDisplay="auto"
                            step={1}
                            min={-180}
                            max={180}
                        />
                    </div>
                </div>
  
                <div className="flex-sliders">
                    <div className="block-sliders">
                        <InputLabel>Border Radius</InputLabel>
                        <Slider value={borderRadius}
                            onChange={handleChangeBorderRadius}
                            aria-label="Default" valueLabelDisplay="auto"
                            step={0.001}
                            min={0}
                            max={20}
                        />
                    </div>

                    <div className="block-sliders">
                        <InputLabel>Opacity</InputLabel>
                        <Slider value={opacity}
                            onChange={handleChangeOpacity}
                            aria-label="Default" valueLabelDisplay="auto"
                            step={0.0001}
                            min={0}
                            max={1.1}
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