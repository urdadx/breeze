import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { ShotEditorStyled } from "../../styles/ShotEditorStyled";
import { solidColors } from "../../data/solids";

const SolidPicker = () => {
    
    const [solids, setSolid] = useState([]);

    useEffect(() => {
        setSolid(solidColors)
    },[])

    return ( 
        <>
        <Box m={2} className="gradients-div">
        {
            solids && solids.map((solid) => {
                return <>
                    <ShotEditorStyled>
                        <div 
                            style={{
                                background: `${solid.color}`,
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
        </>
     );
}
 
export default SolidPicker;