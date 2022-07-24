import { useEffect, useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider"; // angle picker
import { colorGradients } from "../../data/gradients";
import Box from "@mui/material/Box";
import { ShotEditorStyled } from "../../styles/ShotEditorStyled";
import { InputLabel } from "@mui/material";

const GradientsPicker = () => {
    
    const [gradients, setGradients] = useState([]);

    useEffect(() => {
        setGradients(colorGradients)
    },[])

    return (    
        <>
        <Box className="gradients-div">
        {
            gradients && gradients.map((gradient) => {
                return <>
                    <ShotEditorStyled>
                        <div 
                            style={{
                                background: `linear-gradient(to left, ${gradient.colors[0]}, ${gradient.colors[1]})`,
                                width:"90px",
                                height:"60px",
                                borderRadius:"10px",
                                cursor: "pointer",
                            }} > 
                        </div>
                    </ShotEditorStyled>
                </>
            })
        }
  
        </Box>
        <Box m={2}>
            <InputLabel sx={{marginBottom:"15px"}}>Direction</InputLabel>
            <CircularSlider
                width={90}
                valueFontSize="20px"
                labelFontSize="9px"
                verticalOffset="0em"
            />
        </Box>
        </>
     );
}
 
export default GradientsPicker;