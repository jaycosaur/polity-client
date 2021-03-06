const defaultState = {
    isSigningIn: false,
    isSignedIn: false,
    forceProfileComplete: true,
    signInError: false,
    signInErrorMessage: null,
    isSendingResetEmail: false,
    resetEmailSent: false,
    resetEmailError: false,
    resetEmailErrorMessage: false,
    additionalUserInfo: null,
    credential: null,
    user: null,
    accountInformation: {
        isLoading: false,
        info: {},
        lastLoaded: null
    },
    accountSetup: {
        userIsSetup: false,
        setupStep: "lets-setup-your-account",
        stepNumber: 0,
        numberOfSteps: 6
    },
}

export default(state = defaultState, action) => {
    switch(action.type) {
        case 'RESET_STATE_TO_DEFAULT':
            return {...defaultState}
        case 'SIGNIN_USER_PENDING':
            return {...state, isSigningIn: true, signInError: false, signInErrorMessage: null}
        case 'SEND_USER_VERIFICATION_EMAIL_PENDING':
            return {...state, emailVerificationSent: true}
        case 'SIGNIN_USER_FULFILLED':
            const forceProfileComplete = !action.payload.user.displayName||!action.payload.user.emailVerified||!action.payload.user.phoneNumber
            return {...state, isSigningIn: false, isSignedIn: true, ...action.payload, forceProfileComplete}
        case 'SIGNIN_USER_REJECTED':
            return {...state, isSigningIn: false, signInError: true, signInErrorMessage: action.payload}
        case 'SIGNOUT_USER_PENDING':
            return {...state, isSigningOut: true}
        case 'SIGNOUT_USER_FULFILLED':
            return {...state, isSigningOut: false, isSignedIn: false, user: null, forceProfileComplete: false}
        case 'SIGNOUT_USER_REJECTED':
            return {...state, isSigningOut: false}
        case 'FETCH_USER_FROM_LOCAL':
            return {...state, isSigningIn: false, isSignedIn: action.payload.userFound, user: action.payload.useritem}
        case 'SIGNIN_USER_FROM_LOCAL':
            return {...state, isSigningIn: false, isSignedIn: true, user: action.payload}
        case 'PASSWORD_RESET_PENDING':
            return {...state, isSendingResetEmail: true, resetEmailSent: false, resetEmailError: false, resetEmailErrorMessage: null}
        case 'PASSWORD_RESET_FULFILLED':
            return {...state, isSendingResetEmail: false, resetEmailSent: true}
        case 'PASSWORD_RESET_REJECTED':
            return {...state, isSendingResetEmail: false, resetEmailError: true, resetEmailErrorMessage: action.payload}
        case 'PROGRESS_ACCOUNT_SETUP_STEP':
            return {...state, accountSetup: {
                ...state.accountSetup,
                stepNumber: action.payload.stepIndexNumber,
                setupStep: action.payload.stepKey,
            }}
        case 'GET_ACCOUNT_INFORMATION_PENDING':
            return {
                ...state,
                accountInformation: {
                    ...state.accountInformation,
                    loadSucceeded: null,
                    isLoading: true,
                }
            }
        case 'GET_ACCOUNT_INFORMATION_FULFILLED':
            return {
                ...state,
                accountInformation: {
                    ...state.accountInformation,
                    isLoading: false,
                    loadSucceeded: true,
                    lastLoaded: Date.now(),
                    info: {
                        ...action.payload
                    }
                }
            }
            
        default: 
            return state
    }
}