import { Typography, Box } from "@mui/material";

const Label = ({ name }) => {
    return (  
        <>
            <Box sx={{display:"flex", m:2}}>
                <Typography fontWeight="bold" >{name}</Typography>
            </Box>
        </>
    );
}
    
export default Label;