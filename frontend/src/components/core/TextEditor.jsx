import { TextEditorStyled } from "../../styles/TextEditorStyled";
import { 
    Box, Switch, Typography, TextField, Select,
    FormControl, MenuItem, InputLabel, Slider 
} from "@mui/material";
import Label from "../atoms/Label";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import { RiBold } from "react-icons/ri";
import { FiItalic } from "react-icons/fi";
import { fonts } from "../../utils";
import { useState } from "react";

const TextEditor = ({ header, setHeader }) => {

    const [font, setFont] = useState(fonts[0].name)

    // Header is VISIBLE..?
    const [showHeader, setShowHeader] = useState(true)
    const handleShowHeader = (event) => {
        setShowHeader(event.target.checked);
    }

    // Header settings
    const [direction, setDirection] = useState(
        header.direction ? header.direction : "top-down"
    )
    const [size, setSize] = useState(
        header.style.size ? header.style.size :  14
    )
    const [spacing, setSpacing] = useState(
        header.style.spacing ? header.style.spacing : 10
    )

    const [color, setColor] = useState(
        header.style.color ? header.style.color : "#fff"
    )

    const [title, setTitle] = useState(header.text.title)
    const [subtitle, setSubTitle] = useState(header.text.subtitle)
    const [isBold, setIsBold] = useState(false)
    const [isItalic, setIsItalic] = useState(false)


    const handleChangeDirection = (e, value) => {
        e.preventDefault()
        setDirection(value)
        setHeader({
            ...header,
            direction: direction
        })
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
        setHeader({
            ...header,
            text:{
                title: title,
                subtitle: subtitle
            }
        })
    }

    const handleChangeSubtitle = (e) => {
        setSubTitle(e.target.value)
        setHeader({
            ...header,
            text:{
                title: title,
                subtitle: subtitle
            }
        })
    }

    const handleChangeFont = (e) => {
        setFont(e.target.value)
        setHeader({
            ...header,
            style:{
                fontFamily: font,
                bold: isBold,
                italic: isItalic,
                size: size,
                spacing: spacing
            }
        })
    }

    const handleChangeColor = (e) => {
        setColor(e.target.value)
        setHeader({
            ...header,
            color: color       
        })
    }

    const handleChangeSize = (e, newValue) => {
        setSize(newValue)
        setHeader({
            ...header,
            style:{
                fontFamily: font,
                bold: isBold,
                italic: isItalic,
                size: size,
                spacing: spacing
            }
        })
    }

    const handleChangeSpacing= (e, newValue) => {
        setSpacing(newValue)
        setHeader({
            ...header,
            style:{
                fontFamily: font,
                bold: isBold,
                italic: isItalic,
                size: size,
                spacing: spacing
            }
        })
    }

    return ( 
        <>
            <TextEditorStyled>
                <Label name="Header" />
                <Box ml={2} className="wrapper">
                    <Typography>Use a header:</Typography>
                    <div className="i-wrapper" >
                        <Switch onChange={handleShowHeader} checked={showHeader} color="success" />
                    </div>
                </Box>
                
                <Label name="Direction" />
                <Box m={2}>
                    <div className="direction_wrapper">
                        <div onClick={() => handleChangeDirection("top-down")} className="icons">
                            <AiOutlineVerticalAlignTop  style={{fontSize:"30px"}} />
                        </div>
                        <div onClick={() => handleChangeDirection("left-right")} 
                            className="icons" style={{marginLeft:'7px'}}>
                            <AlignHorizontalLeftIcon style={{fontSize:"25px"}} />
                        </div>
                    </div>
                </Box>
                <Label name="Text" />
                <Box m={2}>
                    <TextField 
                        value={title}
                        onChange={handleChangeTitle}
                        sx={{ width: 310}}
                        id="outlined-basic" label="Title" 
                        variant="outlined"
                    />
                    <TextField 
                        value={subtitle}
                        onChange={handleChangeSubtitle}
                        sx={{ width: 310, mt:3}}
                        id="outlined-basic" label="Subtitle" 
                        variant="outlined"
                    />
                </Box>
                <Label name="Styling" />
                <Box mx={2} sx={{ display:"flex", justifyContent:"space-between", width:315, alignItems:"center"}}>
                    <div className="select">
                        <InputLabel>Font Family</InputLabel>
                        <FormControl size="small" sx={{ minWidth: 190, mt:1, maxWidth: 250 }}>
                        <Select value={font} onChange={handleChangeFont}>
                            {
                                fonts && fonts.map((font,key) => {
                                    return <MenuItem key={key} value={font.name}>{font.name}</MenuItem>
                                })
                            }
                        </Select>
                        </FormControl>
                    </div>
                    <div className="direction_wrapper two">
                        <div>
                            <InputLabel>Bold</InputLabel>
                            <div className="icons label">
                                <RiBold  style={{fontSize:"25px"}} />
                            </div>
                        </div>

                        <div>
                            <InputLabel>Italic</InputLabel>
                            <div className="icons label" style={{marginLeft:'7px'}}>
                                <FiItalic style={{fontSize:"25px"}} />
                            </div>
                        </div>
                    </div>
                </Box>
                <Box m={2}>
                    <InputLabel>Color</InputLabel>
                    <div className="color-wrapper" style={{background: color}}>
                        <input 
                            onChange={handleChangeColor} 
                            value={color} className="color" 
                            type="color"
                        />
                    </div>
                </Box>
                
                <Box m={2}>
                    <InputLabel>Size</InputLabel>
                    <Slider 
                        value={size}
                        onChange={handleChangeSize}
                        aria-label="Default" valueLabelDisplay="auto"
                        step={0.05}
                        min={0}
                        max={50}
                    />
                    <InputLabel>Spacing</InputLabel>
                    <Slider 
                        value={spacing}
                        onChange={handleChangeSpacing}
                        aria-label="Default" valueLabelDisplay="auto"
                        step={0.05}
                        min={0}
                        max={50}
                    />
                </Box>
            </TextEditorStyled>
        </>
     );
}
 
export default TextEditor;