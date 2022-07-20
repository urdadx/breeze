
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

const ShotsEditor = () => {

    const [frame, setFrame] = useState(frames[0].name)

    const handleChange = (event) => {
        setFrame(event.target.value);
    };

    const [bg, setBg] = useState(backgrounds[0].name)

    const handleBgChange = (event) => {
        setBg(event.target.value);
    };
    
    return ( 
        <>
    <ShotEditorStyled>
        <div className="orientation">
        <FormControl sx={{ p:2, minWidth: 120, maxWidth:120 }} size="small" >
 
            <InputLabel sx={{fontSize:"20px"}} >Frame</InputLabel>
            <Select
                value={frame}
                onChange={handleChange}
            >
            {
                frames && frames.map((frame) => {
                    return <MenuItem value={frame.name}>{frame.name}</MenuItem>
                })
            }
            </Select>
        </FormControl>

            <FormControl sx={{ p:2, minWidth: 170, maxWidth:170 }} size="small" >
                <InputLabel sx={{fontSize:"20px"}} >Background</InputLabel>
                <Select
                    value={bg}
                    onChange={handleBgChange}
                >
                {
                    backgrounds && backgrounds.map((bg) => {
                        return <MenuItem value={bg.name}>{bg.name}</MenuItem>
                    })
                }
                </Select>
        </FormControl>
            </div>
        <div>
            <Label name="Position" />
            <Box m={2}  width={300}>
                <InputLabel>Position X</InputLabel>
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                <InputLabel>Position Y</InputLabel>
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </Box>
        </div>
    </ShotEditorStyled>
        
        </>
     );
}
 
export default ShotsEditor;