import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #c84e89',
    boxShadow: 24,
    borderRadius: 1,
    p: 4,
};

const PopUpModal = ({ open, handleClose }) => {
   
    return ( 
        <>
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                    Coming Soon !! 🎉
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                         Beautiful customizable design templates for your social media visual content. 🔥
                    </Typography>
                </Box>
                </Fade>
            </Modal>
    </div>
        </>
     );
}
 
export default PopUpModal;