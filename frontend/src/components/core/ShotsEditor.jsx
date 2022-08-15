import { useState } from 'react';
import { frames } from '../../utils';
import { ShotEditorStyled } from '../../styles/ShotEditorStyled';
import { backgrounds } from '../../utils';
import Label from '../atoms/Label';
import GradientsPicker from '../utils/GradientsPicker';
import SolidPicker from '../utils/SolidPicker';
import { Typography, InputLabel, MenuItem, FormControl, Select, Box, Slider } from '@mui/material';
import Switch from '@mui/material/Switch';


const ShotsEditor = ({ data, setData }) => {

    const [frame, setFrame] = useState(data.frame.type)
    const [bg, setBg] = useState(data.background.type)

    const [scale, setScale] = useState(
        data.position.scale  ? data.position.scale : 0.8 
    )
    const [borderRadius, setBorderRadius] = useState(
        data.borderRadius.curveness ? data.borderRadius.curveness : 7
    )

    // Default settings for screenshot shadow
    const [offsetX, setOffsetX] = useState(
        data.shadow.offsetX ? data.shadow.offsetX : 6
    )
    const [offsetY, setOffsetY] = useState(
        data.shadow.offsetY ? data.shadow.offsetY : 10
    )
    const [blur, setBlur] = useState(
        data.shadow.blur ? data.shadow.blur : 15 
    )
    const [opacity, setOpacity] = useState(
        data.shadow.opacity ? data.shadow.opacity : 0.2 
    )
    const [color, setColor] = useState(
        data.shadow.color ? data.shadow.color : "#000000"
    )

    const handleOffsetX = (e, newValue) => {
        e.preventDefault();
        setOffsetX(newValue)
        setData({
           ...data,
           shadow:{
              offsetX: offsetX,
              offsetY: offsetY,
              blur: blur,
              opacity: opacity,
              color: color
           }
        })
    }

    const handleOffsetY = (e, newValue) => {
        e.preventDefault();
        setOffsetY(newValue)
        setData({
           ...data,
           shadow:{
              offsetX: offsetX,
              offsetY: offsetY,
              blur: blur,
              opacity: opacity,
              color: color
           }
        })
    }

    const handleBlur = (e, newValue) => {
        e.preventDefault();
        setBlur(newValue)
        setData({
           ...data,
           shadow:{
                offsetX: offsetX,
                offsetY: offsetY,
                blur: blur,
                opacity: opacity,
                color: color 
           }
        })
    }

    const handleOpacity = (e, newValue) => {
        e.preventDefault();
        setOpacity(newValue)
        setData({
           ...data,
           shadow:{
                offsetX: offsetX,
                offsetY: offsetY,
                blur: blur,
                opacity: opacity,
                color: color 
           }
        })
    }

    const handleChangeFrame = (e) => {
        setFrame(e.target.value)
            setData({
                ...data,
                frame:{
                    type: e.target.value
                }
        })
    }


    const handleChangeColor = (e) => {
        setColor(e.target.value)
        setData({
            ...data,
            shadow:{
              offsetX: offsetX,
              offsetY: offsetY,
              blur: blur,
              opacity: opacity,
              color: color 
            }
        })
    }

    const [showShadow, setShowShadow] = useState(false)

    const handleShowShadow = (event) => {
        setShowShadow(event.target.checked);
    };

    const [positionX, setPositionX] = useState(
        data.position.x ? data.position.x : 0
    )

    const [positionY, setPositionY] = useState(
        data.position.y ? data.position.y : -3
    )

    const handleXPosition = (e, newValue) => {
        e.preventDefault();
        setPositionX(newValue);
        setData({
            ...data,
            position: {
                x: positionX,
                y: positionY,
                scale: scale,
            },
        })
    }

    const handleYPosition = (e, newValue) => {
        e.preventDefault();
        setPositionY(newValue);
        setData({
            ...data,
            position: {
                x: positionX,
                y: positionY,
                scale: scale,
            },
        })
    }
    
    const handleBgChange = (event) => {
        setBg(event.target.value);
    };

    const handleChangeScale = (e, newValue) => {
        e.preventDefault()
        setScale(newValue);
        setData({
            ...data,
            position: {
                x: positionX,
                y: positionY,
                scale: scale,
            },
        })
    }

    const handleBorderChange = (e, newValue) => {
        e.preventDefault();
        setBorderRadius(newValue);
        setData({
            ...data,
            borderRadius:{
                curveness: borderRadius
            }
        })
    }
    
    return ( 
        <>
    <ShotEditorStyled>
        <div className="shots-editor">
        <div className="orientation">
        <FormControl sx={{ p:2, minWidth: 140, maxWidth:140 }} size="small" >
 
            <InputLabel sx={{fontSize:"20px"}}>Frame</InputLabel>
            <Select value={frame} onChange={handleChangeFrame}>
            {
                frames && frames.map((frame,key) => {
                    return <MenuItem key={key} value={frame.name}>{frame.name}</MenuItem>
                })
            }
            </Select>
        </FormControl>

        <FormControl sx={{ p: 2, minWidth: 140, maxWidth: 140 }} size="small" >
            <InputLabel sx={{fontSize:"20px"}} >Background</InputLabel>
            <Select value={bg} onChange={handleBgChange}>
            {
                backgrounds && backgrounds.map((bg,key) => {
                    return <MenuItem key={key} value={bg.name}>{bg.name}</MenuItem>
                })
            }
            </Select>
        </FormControl>  
            </div>
        <div>

            <Label name="Position" />

            <Box m={2} width={300}>

                <InputLabel>Position X</InputLabel>
                <Slider value={positionX}
                    min={-80}
                    max={80}
                    aria-label="Default" valueLabelDisplay="auto"
                    onChange={handleXPosition}
                />

                <InputLabel>Position Y</InputLabel>
                <Slider value={positionY} 
                    min={-80}
                    max={80}
                    aria-label="Default" valueLabelDisplay="auto"
                    onChange={handleYPosition}
                />

            </Box>
        </div>

        <Label name="Styling"  />
        <Box m={2} className="gradients-area">
            {
                bg === "Solid" ? <SolidPicker data={data} setData={setData} />
                : <GradientsPicker data={data} setData={setData} /> 
            }
        </Box>

        <Label name="Orientation" />
            <Box m={2} width={300}>
                <InputLabel>Size</InputLabel>
                <Slider value={scale}
                    min={0}
                    max={1}
                    step={0.00001}
                    onChange={handleChangeScale} 
                    aria-label="Default" valueLabelDisplay="auto"
                />
            </Box>
        
        <Box className="main" m={2} width={300}>
            <Typography className="typo-bold">Shadow</Typography>
            <Switch color="success" onChange={handleShowShadow} checked={showShadow} />
        </Box>
        {
            showShadow && 
                <Box m={2} width={300}>
                    <div className="main">
                        <Typography>Shadow color</Typography>
                        <div
                            style={{ background: color }}
                            className="color-ball"
                        >
                        <input onChange={handleChangeColor} 
                            value={color} className="color" type="color"
                        />
                        </div>
                    </div>
                    <div className="flex-sliders">
                        <div className="block-sliders">
                            <InputLabel>OffsetX</InputLabel>
                            <Slider value={offsetX}
                                onChange={handleOffsetX}
                                aria-label="Default" valueLabelDisplay="auto"
                                step={0.05}
                                min={0}
                                max={50}
                            />
                        </div>

                        <div className="block-sliders">
                            <InputLabel>OffsetY</InputLabel>
                            <Slider value={offsetY}
                                onChange={handleOffsetY}
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
                            <Slider value={blur}
                                onChange={handleBlur}
                                aria-label="Default" valueLabelDisplay="auto"
                                step={0.05}
                                min={0}
                                max={50}
                            />
                        </div>

                        <div className="block-sliders">
                            <InputLabel>Opacity</InputLabel>
                            <Slider value={opacity}
                                onChange={handleOpacity}
                                aria-label="Default" valueLabelDisplay="auto"
                                step={0.005}
                                min={0}
                                max={1}
                            />
                        </div>
                    </div>

                </Box>
        }
        

        <Label name="Rounded Corners" />
        <Box m={2} width={300}>
            <InputLabel>Border Radius</InputLabel>
            <Slider 
                value={borderRadius} 
                aria-label="Default" valueLabelDisplay="auto"
                step={0.05}
                min={0}
                max={50}
                onChange={handleBorderChange}
            />
        </Box>


        </div>
    </ShotEditorStyled>
        
        </>
     );
}
 
export default ShotsEditor;