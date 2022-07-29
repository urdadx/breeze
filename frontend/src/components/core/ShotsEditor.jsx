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
import TextField from '@mui/material/TextField';
import GradientsPicker from '../utils/GradientsPicker';
import SolidPicker from '../utils/SolidPicker';


const ShotsEditor = ({ data, setData }) => {

    const [frame, setFrame] = useState(data.frame.type)

    const handleChange = (event) => {
        setFrame(event.target.value);
    };

    const [bg, setBg] = useState(data.background.type)
    
    const handleBgChange = (event) => {
        setBg(event.target.value);
    };

    const handleChangeScale = (e, newValue) => {
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

    const [scale, setScale] = useState(
        data.position.scale  ? data.position.scale : 0.8 
    );

    console.log(scale)

    
    return ( 
        <>
    <ShotEditorStyled>

        <div className="orientation">
        <FormControl sx={{ p:2, minWidth: 120, maxWidth:120 }} size="small" >
 
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

        <FormControl sx={{ p: 2, minWidth: 170, maxWidth: 170 }} size="small" >
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
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"/>

                <InputLabel>Position Y</InputLabel>
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"/>

            </Box>

            <Box sx={{m:2, spacing:2, display:"flex", justifyContent:"space-between"}}
                 className="orientation" >
                
                <Box sx={{display:"flex", alignItems:"center"}}>
                    <TextField
                        id="outlined-number"
                        type="number"
                        size="small"
                        label="Width"
                        value={125}
                        sx={{width:"145px"}}s
                    />
                </Box>
                <Box sx={{display:"flex", alignItems:"center"}}>
                    <TextField
                        id="outlined-number"
                        type="number"
                        label="Height"
                        size="small"
                        value={368}
                        sx={{width:"145px"}}
                    />
                </Box>
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
                <InputLabel>Scale</InputLabel>
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
            <Slider defaultValue={30} aria-label="Default" valueLabelDisplay="auto" />
        </Box>

    </ShotEditorStyled>
        
        </>
     );
}
 
export default ShotsEditor;