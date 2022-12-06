import React from "react";
import PropTypes from 'prop-types';
import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import CloseIcon from '@mui/icons-material/Close';
import JumboCodeBlock from "../JumboCodeBlock";
import JumboIconButton from "@jumbo/components/JumboIconButton";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition({children, ...restProps}, ref) {
    return (
        <Slide direction="up" ref={ref} {...restProps}>
            {children}
        </Slide>
    );
});

const JumboDemoCard = ({title, subheader, children, demoCode, noWrapper, wrapperSx, sx}) => {
    const [open, setOpen] = React.useState(false);
    const [text, setText] = React.useState('');

    React.useEffect(() => {
        fetch(demoCode)
            .then((response) => response.text())
            .then((textContent) => {
                setText(textContent);
            });
    }, [demoCode]);

    const handleClickOpen = React.useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = React.useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <React.Fragment>
            <Card
                sx={sx}
            >
                <CardHeader
                    title={
                        title && (
                            <Typography variant={"h4"} mb={0}>{title}</Typography>
                        )
                    }
                    subheader={
                        subheader && (
                            <Typography sx={{mt: 1, color: "text.secondary"}}>{subheader}</Typography>
                        )
                    }
                    action={
                        <JumboIconButton
                            onClick={handleClickOpen}
                            sx={{
                                margin: '-10px -6px -10px 0'
                            }}
                        >
                            <CodeIcon/>
                        </JumboIconButton>
                    }
                />
                {
                    noWrapper ? children :
                        <CardContent
                            sx={{
                                display: 'flex',
                                minWidth: 0,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: theme => theme.palette.action.hover,
                                ...wrapperSx,
                            }}
                        >
                            {children}
                        </CardContent>
                }
            </Card>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                maxWidth={false}
                fullWidth={true}
                sx={{
                    '& .MuiPaper-root': {
                        borderRadius: 2,
                        pb: 3,
                    },

                    '& .kZOESq': {
                        backgroundColor: '#19243B',
                        p: 1.5,
                        borderRadius: 2,

                        '& > span': {
                            pl: '0 !important',
                            backgroundColor: 'inherit !important'
                        }
                    },
                    '& .lfriTS': {
                        top: '12px',
                        right: '12px',
                        backgroundColor: 'inherit',
                        border: 'solid 2px #FFF',
                    }

                }}
            >
                <DialogTitle
                    sx={{
                        fontSize: 20,
                        display: 'flex',
                        minWidth: 0,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 0
                    }}
                >
                    {`${title} > Source Code`}
                    <JumboIconButton onClick={handleClose} sx={{margin: '-10px -6px -10px 0'}}>
                        <CloseIcon/>
                    </JumboIconButton>
                </DialogTitle>
                <DialogContent sx={{pb: 0}}>
                    <DialogContentText id="alert-dialog-slide-description">
                        <JumboCodeBlock text={text}/>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
};

JumboDemoCard.propTypes = {
    title: PropTypes.node,
    subheader: PropTypes.node,
    children: PropTypes.node,
    demoCodeFile: PropTypes.string,
};

export default JumboDemoCard;
