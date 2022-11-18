import { Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { Box, Modal } from '@mui/material';
import React from 'react';
import CadastroPost from '../cadastroPost/CadastroPost';
import './ModalPostagem.css';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    paper: {
        position: 'absolute',
        width: 900,
        height: 500,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '15px',
        boxShadow: theme.shadows[10],
        padding: theme.spacing(2, 4, 3)
    },
}),
);

function ModalPostagem() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Box display="flex" justifyContent="center" className="cursor">
                <CloseIcon onClick={handleClose} />
            </Box>

            <CadastroPost />
        </div>
    );

    return (
        <div>
            <Button
                variant="outlined"
                className="btnModal"
                onClick={handleOpen}>Nova Postagem</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default ModalPostagem;