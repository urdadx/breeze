import { CoverStyled } from "../../styles/CoverStyled";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const UploadMsg = () => {
    return (
        <>
            <CoverStyled>
                <div className="file-area">
                    <div className="image-icon">
                        <AddPhotoAlternateIcon style={{
                            color: "white",
                            fontSize:"40px"
                        }} />                       
                    </div>
                    
                    <p>Click here to <b>upload</b> an image</p>
                    <p>Or simply <b>Drag</b> and <b>Drop</b> the file</p>
                </div>
            </CoverStyled>
        </>
      );
}
 
export default UploadMsg;