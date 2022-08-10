import { CustomAreaStyled } from "../../styles/CustomAreaStyled";
import ShotsEditor from "./ShotsEditor";

const CustomArea = ({ data, setData }) => {
    return (  
        <>
            <CustomAreaStyled>
                <ShotsEditor data={data} setData={setData} />
            </CustomAreaStyled>
        </>
    );
}
 
export default CustomArea;