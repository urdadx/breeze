import { Typography, Box } from "@mui/material";

const Label = ({ name }) => {
    return (  
        <>
            <Box sx={{ m:2}}>
                <Typography sx={{fontFamily:"Epilogue"}} fontWeight="bold" >{name}</Typography>
            </Box>
        </>
    );
}
    
export default Label;