import { EditorStyled } from "../../styles/EditorStyled";
import { Button, Select, FormControl, MenuItem, Tooltip } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { useState } from "react";
import { options } from "../../utils";
import PopUpModal from "../utils/PopUpModal";

const Header = ({
        darkMode,
        setDarkMode,
        onExportScreenshot,
        exporting,
        onExportCodeShot,
        setExporting
    }) => {
    
    const [format, setFormat] = useState(options[0].name)

    const handleChange = (event) => {
        setFormat(event.target.value);
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return ( 
        <>
        <EditorStyled>
            <nav>
                <div className="header-items">
                <div className="file-formats">
                <FormControl style={{display: "none"}}  sx={{ p:1.5, minWidth: 250, maxWidth:250 }} size="small" >
                    <Select disabled onChange={handleChange} value={format}>
                        {
                            options && options.map((option,key) => {
                                return <MenuItem key={key} value={option.name}>{option.name}</MenuItem>    
                            })
                        }

                    </Select>
                </FormControl>
                    </div>
                    <div className="utils">
                
                        <div className="templates-btn">
                            <Tooltip arrow title="Coming soon">     
                                    <Button 
                                        onClick={handleOpen}
                                        endIcon={<AutoFixHighIcon style={{fontSize:"27px"}} />}
                                        className="action-btn templates"
                                        variant="text"
                                    >
                                        Templates
                                    </Button>
                            </Tooltip>
                            <PopUpModal open={open} handleClose={handleClose} handleOpen={handleOpen} />

                        </div>
                        <div className="download-wrapper">
                            <Button 
                                onClick={onExportScreenshot ? onExportScreenshot : onExportCodeShot}
                                endIcon={<FileDownloadOutlinedIcon style={{fontSize:"27px"}} />}
                                className="action-btn download"
                                variant="contained">
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