import { CustomAreaStyled } from "../../styles/CustomAreaStyled";
import Watermark from "../atoms/Watermark";
import ShotsEditor from "./ShotsEditor";

const CustomArea = () => {
    return (  
        <>
            <CustomAreaStyled>
                <Watermark/>
                <ShotsEditor />
            </CustomAreaStyled>
        </>
    );
}
 
export default CustomArea;