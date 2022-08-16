import { TextEditorStyled } from "../../styles/TextEditorStyled";
import { Box, Switch, Typography, TextField, Select,
    FormControl, MenuItem, InputLabel, Slider } from "@mui/material";
import Label from "../atoms/Label";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import { RiBold } from "react-icons/ri";
import { FiItalic } from "react-icons/fi";

const TextEditor = ({ code, data }) => {
    return ( 
        <>
            <TextEditorStyled>
                <Label name="Header" />
                <Box ml={2} className="wrapper">
                    <Typography>Use a header:</Typography>
                    <div className="i-wrapper" >
                        <Switch size="large" color="success" defaultChecked />
                    </div>
                </Box>
                
                <Label name="Direction" />
                <Box m={2}>
                    <div className="direction_wrapper">
                        <div className="icons">
                            <AiOutlineVerticalAlignTop  style={{fontSize:"30px"}} />
                        </div>
                        <div className="icons" style={{marginLeft:'7px'}}>
                            <AlignHorizontalLeftIcon style={{fontSize:"25px"}} />
                        </div>
                    </div>
                </Box>
                <Label name="Text" />
                <Box m={2}>
                    <TextField 
                        sx={{ width: 310}}
                        id="outlined-basic" label="Title" 
                        value="The best editing tool for developers"
                        variant="outlined"
                    />
                    <TextField 
                        sx={{ width: 310, mt:3}}
                        id="outlined-basic" label="Subtitle" 
                        value="Create engaging assets for your project"
                        variant="outlined"
                    />
                </Box>
                <Label name="Styling" />
                <Box mx={2} sx={{ display:"flex", justifyContent:"space-between", width:315, alignItems:"center"}}>
                    <div className="select">
                        <InputLabel>Font Family</InputLabel>
                        <FormControl size="small" sx={{ minWidth: 190, mt:1, maxWidth: 250 }}>
                            <Select value="Epilogue">
                                <MenuItem>Raleway</MenuItem>
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
                    <div className="color-wrapper" style={{background: 'white'}}>
                        <input className="color" type="color" />
                    </div>
                </Box>
                
                <Box m={2}>
                    <InputLabel>Size</InputLabel>
                    <Slider 
                        aria-label="Default" valueLabelDisplay="auto"
                        step={0.05}
                        min={0}
                        max={50}
                    />
                    <InputLabel>Spacing</InputLabel>
                    <Slider 
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