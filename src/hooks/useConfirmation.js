import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, makeStyles, IconButton } from '@material-ui/core'
import Controls from '../components/controls/Controls';
import CloseIcon from '@material-ui/icons/Close';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';


const useStyles = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        textAlign: 'center'
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogAction: {
        justifyContent: 'center'
    },
    titleIcon: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem',
        }
    }
}))
export  function useConfirmation(title,subTitle) {
    
    const [open, setOpen] = React.useState(false);
    const [onConfirm,setConfirm]=React.useState(()=>()=>{})
    const openConfirm = (callbak) => {setOpen(true);setConfirm(()=>callbak)};
  const setOpenPopup=()=>setOpen(false)
    const ConfirmPopup=()=><Popup onConfirm={onConfirm} title={title} subTitle={subTitle} openPopup={open} setOpenPopup={setOpenPopup} ></Popup>
    return {ConfirmPopup,openConfirm}
}

function Popup(props) {

    const { title, subTitle,onConfirm, openPopup, setOpenPopup,...other } = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup} classes={{ paper: classes.dialog }}>
        <DialogTitle className={classes.dialogTitle}>
            <IconButton disableRipple className={classes.titleIcon}>
                <NotListedLocationIcon />
            </IconButton>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
            <Typography variant="h6">
                {title}
            </Typography>
            <Typography variant="subtitle2">
                {subTitle}
            </Typography>
        </DialogContent>
        <DialogActions className={classes.dialogAction}>
            <Controls.Button
                text="No"
                color="default"
                onClick={setOpenPopup} />
            <Controls.Button
                text="Yes"
                color="secondary"
                onClick={()=>{onConfirm();setOpenPopup()}} />
        </DialogActions>
    </Dialog>
    )
}