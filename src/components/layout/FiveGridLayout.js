import { makeStyles } from '@material-ui/core'
import React from 'react'
const useStyles=makeStyles(theme=>({
root:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr',
    gap:50,
    marginBottom:'30px',
    [theme.breakpoints.down('lg')]:{gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr'},
    [theme.breakpoints.down('md')]:{gridTemplateColumns:'1fr 1fr 1fr 1fr'},
    [theme.breakpoints.down('sm')]:{gridTemplateColumns:'1fr 1fr 1fr'},
    [theme.breakpoints.down('xs')]:{gridTemplateColumns:'1fr'},

}
}))
export default function FiveGridLayout({children}) {
const classes=useStyles()
    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}
