import View from './View'

import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';

import EntryFlowView from './../../views/EntryFlowView'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import { push } from 'connected-react-router'

const styles = theme => {
    return ({
      mainText: {
          [theme.breakpoints.down('sm')]: {
              ...theme.typography.display1,
              color: "white",
              fontWeight: 500,
          },
          [theme.breakpoints.up('md')]: {
              ...theme.typography.display3,
              color:  "white",
              fontWeight: 500,
          },
      },
      secondaryText: {
          color:  "white",
          fontWeight: 300,
          [theme.breakpoints.down('sm')]: {
              ...theme.typography.display1,
              color:  "white",
              fontWeight: 300,
              textAlign: "center",
              marginTop: 64
          },
      },
      formCard: {
          maxWidth: 400,
          [theme.breakpoints.down('xs')]: {
              height: "60%"
          },
      },
      mainButton: {
          marginTop: 16, 
          width: "100%",
          height: 64,
          color: "white"
      }
    }
  )};

const SignupView = (props) => {
    const { classes, location: { pathname } } = props
    console.log(props)
    switch(pathname){
        case "/awaiting-invite":
            return (
                <EntryFlowView
                    leftWhite
                    leftCard={
                        [
                            <Hidden mdDown>
                                <Typography align="left" gutterBottom className={classes.mainText} style={{color: "#623aa2"}}>Join an existing team on POLIBASE.</Typography>
                            </Hidden>,
                        ]
                    }
                    rightCard={<View {...props}/>
                    }>
                </EntryFlowView>)
        default: 
            return (
                <EntryFlowView
                    leftCard={
                        [
                            <Hidden mdDown>
                                <Typography align="left" gutterBottom className={classes.mainText}>Create a new team on POLIBASE.</Typography>
                            </Hidden>,
                            <Typography variant="display1" className={classes.secondaryText}>Let's setup your new team.</Typography>
                        ]
                    }
                    rightCard={<View {...props}/>
                    }>
                </EntryFlowView>)
    }
}

const mapStateToProps = (state) => {
  return {
      isSigningUp: state.user.isSigningUp,
      signUpError: state.user.signUpError,
      signUpErrorMessage: state.user.signUpErrorMessage,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        goToNewTeam: () => {
            dispatch(push("/create-new-team"))
        },
        goToTeamInvite: () => {
            dispatch(push("/awaiting-invite"))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignupView))
