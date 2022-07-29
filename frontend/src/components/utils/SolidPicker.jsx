import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { ShotEditorStyled } from "../../styles/ShotEditorStyled";
import { solidColors } from "../../data/solids";

const SolidPicker = ({ data, setData }) => {
    
    const [solids, setSolid] = useState([]);

    const [, setColors] = useState({
        color: data.background.color1 ? data.background.color1 : "#ec008c",
    });

    useEffect(() => {
        setSolid(solidColors)
    },[])

    return ( 
        <>
        <Box className="gradients-div">
        {
            solids && solids.map((solid) => {
                return <>
                    <ShotEditorStyled>
                        <div 
                            className="single-div"
                            onClick={() => {
                                setColors({
                                    color:solid.color,
                                })
                                setData({
                                    ...data,
                                    background: {
                                        type:"Solid",
                                        color1:solid.color,
                                        color2: "#fc6767",
                                        direction: 0
                                    }
                                })
                            }}

                            style={{
                                background: `${solid.color}`,
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