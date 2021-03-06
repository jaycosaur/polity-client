import React from 'react'
import ModalTemplate from './ModalTemplate'
import DialogContainer from './DialogContainer'
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux'
import * as actions from './../../../store/actions/accountActions'
import * as popOverModalActions from './../../../store/actions/popoverModalActions'

import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField'
import LoadingButton from './../../../components/loading/LoadingButton'

const validate = values => {
    const errors = {}
    const requiredFields = [ 'displayName', 'email' ]
    requiredFields.forEach(field => {
      if (!values[ field ]) {
        errors[ field ] = 'Required'
      }
    })
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    return errors
  }
  
  const renderTextField = ({ input: { value, onChange }, label, meta: { touched, error }, ...custom }) => (
    <TextField 
      label={label}
      errorText={touched && error}
      value={value}
      fullWidth
      onChange={onChange}
    />
  )
  
  const MaterialUiForm = props => {
    const { handleSubmit, pristine, isLoading } = props
    return (
      <DialogContainer 
          title="Change your information" 
          submitTitle="Update" 
          {...props}
          buttonType="submit"
          submitDisabled={pristine||isLoading}
          handleOk={handleSubmit}
          handleClose={props.closeModal}
          >
        <form onSubmit={handleSubmit} style={{width: "100%"}}>
              <Field name="displayName" component={renderTextField} label="Your display name"/>
              <Field name="email" type="email" component={renderTextField} label="Email"/>
        </form>
       </DialogContainer>

    )
  }

const WrappedForm = reduxForm({form: 'AccountUserInfoForm',validate})(MaterialUiForm)


const UserInfoContents = (props) => <WrappedForm 
                                      {...props} 
                                      onSubmit={(e)=>props.updateAccountInformation(e)} 
                                      closeModal={()=>props.doCloseModal()}
                                      />

const mapStateToProps = (state) => {
    return {
        initialValues: {
            displayName: state.user.accountInformation.info.displayName,
            email:  state.user.accountInformation.info.email
        },
        isLoading: state.popover.isLoading,
    }
}

export default connect(mapStateToProps, {...actions, ...popOverModalActions})(UserInfoContents)