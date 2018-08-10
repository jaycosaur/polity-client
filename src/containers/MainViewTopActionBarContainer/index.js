import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames'

const styles = () => ({
    root: {
        flexGrow: 1,
        zIndex: 100, 
        maxWidth: "100vw"
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    strongTitle: {
        fontWeight: 300,
        flex: 1,
        color: "white"
    },
    buttonSelected: {
        color: "white"
    },
    button: {}
})

//,background: "linear-gradient(45deg, rgba(98,58,162,1) 0%, rgba(249,119,148,1) 100%)"

const Index = (props) => {
    const { children, actions, color="secondary", style={}, className, classes, icon } = props
    return (
        <AppBar position="static" color={color} className={classnames( classes.root,className)} style={style}>
            <Toolbar variant="dense">
                {icon}
                {children}
                {actions}
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(Index)