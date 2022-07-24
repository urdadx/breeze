import { EditorStyled } from "../../styles/EditorStyled";
import Button from '@mui/material/Button';
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import FormControl from "@mui/material/FormControl";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Header = ({
    darkMode,
    setDarkMode,
    downloadPng
}) => {
    return ( 
        <>
        <EditorStyled>
            <nav>
                <div className="header-items">
                <div className="file-formats">
                <FormControl sx={{ p:1.5, minWidth: 250, maxWidth:250 }} size="small" >
                    <Select value="LinkedIn Image">
                        <MenuItem value="LinkedIn Image">Twitter Image</MenuItem>
                        <MenuItem >LinkedIn Image</MenuItem>
                        <MenuItem>Instagram Image</MenuItem>

                    </Select>
                </FormControl>
                    </div>
                    <div className="utils">
                        <div className="dark-mode">
                            <LightModeOutlinedIcon />
                        </div>
                        <div className="templates-btn">
                            <Button 
                                endIcon={<AutoFixHighIcon style={{fontSize:"27px"}} />}
                                className="action-btn"
                                variant="contained">
                                Templates
                            </Button>
                        </div>
                        <div className="download-btn">
                            <Button 
                                endIcon={<FileDownloadOutlinedIcon style={{fontSize:"27px"}} />}
                                className="action-btn"
                                variant="outlined">
                                Download
                            </Button>
                        </div>
                    </div>
                </div>
                
            </nav>
        </EditorStyled>

        </>
     );
}
 
export default Header;