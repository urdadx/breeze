import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import { AiFillLock } from "react-icons/ai";
import { useState } from "react";
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';



const WatermarkStyled = styled.div`
    
    padding: 1rem;

    .wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .i-wrapper{
        display: flex;
        align-items: center;
    }

    .icon{
        font-size: 17px;
    }


`

const Watermark = () => {

    const [enabled, setEnabled] = useState(true)

    return (
        <>
        <WatermarkStyled>
            <Box className="wrapper">
                <Typography>Watermark</Typography>
                <div className="i-wrapper" >
                    <AiFillLock className="icon" />
                    <Tooltip arrow title="Upgrade to Pro 👑">
                        <Switch color="success" checked={enabled} />
                    </Tooltip>
                </div>
            </Box>
        </WatermarkStyled>
        </>
      );
}
 
export default Watermark;