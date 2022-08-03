import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { frames } from '../../utils';
import { ShotEditorStyled } from '../../styles/ShotEditorStyled';
import { backgrounds } from '../../utils';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Label from '../atoms/Label';
import GradientsPicker from '../utils/GradientsPicker';
import SolidPicker from '../utils/SolidPicker';


const ShotsEditor = ({ data, setData }) => {

    const [frame, setFrame] = useState(data.frame.type)

    const handleChange = (event) => {
        setFrame(event.target.value);
    };

    const [bg, setBg] = useState(data.background.type)
    const [borderRadius, setBorderRadius] = useState(
        data.borderRadius.curveness ? data.borderRadius.curveness : 7
    );

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
                x: 50,
                y: 50,
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

    const [scale, setScale] = useState(
        data.position.scale  ? data.position.scale : 0.8 
    );
    
    return ( 
        <>
    <ShotEditorStyled>

        <div className="orientation">
        <FormControl sx={{ p:2, minWidth: 140, maxWidth:140 }} size="small" >
 
            <InputLabel sx={{fontSize:"20px"}}>Frame</InputLabel>
            <Select
                value={frame}
                onChange={handleChange}
            >
            {
                frames && frames.map((frame,key) => {
                    return <MenuItem key={key} value={frame.name}>{frame.name}</MenuItem>
                })
            }
            </Select>
        </FormControl>

        <FormControl sx={{ p: 2, minWidth: 140, maxWidth: 140 }} size="small" >
            <InputLabel sx={{fontSize:"20px"}} >Background</InputLabel>
            <Select
                value={bg}
                onChange={handleBgChange}
            >
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
        
        <Label name="Rounded Corners" />
        <Box m={2} width={300}>
            <InputLabel>Border Radius</InputLabel>
            <Slider 
                value={borderRadius} 
                aria-label="Default" valueLabelDisplay="auto"
                step={0.05}
                min={0}
                max={20}
                onChange={handleBorderChange}
            />
        </Box>



    </ShotEditorStyled>
        
        </>
     );
}
 
export default ShotsEditor;