import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import { AiFillLock } from "react-icons/ai";
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';

const WatermarkStyled = styled.div`
    
    width: 95%;
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

const Watermark = ({ name }) => {


    return (
        <>
        <WatermarkStyled>
            <Box className="wrapper">
                <Typography>{name}</Typography>
                <div className="i-wrapper" >
                    <AiFillLock className="icon" />
                    <Tooltip arrow title="jk, It's all Free🎉..Click to unlock">
                        <Switch color="success" defaultChecked />
                    </Tooltip>
                </div>
            </Box>
        </WatermarkStyled>
        </>
      );
}
 
export default Watermark;