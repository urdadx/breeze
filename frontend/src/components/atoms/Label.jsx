import { Typography, Box } from "@mui/material";

const Label = ({ name }) => {
    return (  
        <>
            <Box sx={{display:"flex", m:2}}>
                <Typography>{name}</Typography>
            </Box>
        </>
    );
}
    
export default Label;