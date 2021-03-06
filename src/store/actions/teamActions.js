import { db } from '../../config/firebase'
const organisationRef = db.collection("organisations")

export const getOrganisationIdddformation = ({ organisationId }) => {
    return {
        type: 'GET_ORGANISATION_FdddULL_INFO',
        payload: Promise.all([organisationRef.doc(organisationId).get().then(res => {
            return {organisationId:organisationId, ...res.data()}
        }), organisationRef.doc(organisationId).collection("users").get().then(snapshot => {
            let userData = []
            snapshot.forEach((doc) => {
                userData = [...userData, {userId: doc.id, ...doc.data()}]
            })
            return userData
        })]).then(res => ({...res[0], users: res[1]}))
    }
}

export const getOrganisationInformation = ({ organisationId }) => {
    return {
        type: 'GET_ORGANISATION_FULL_INFO',
        payload: { organisationId }
    }
}

export const leaveOrganisation = () => {
    return {
        type: 'LEAVE_ORGANISATION_FLOW',
    }
}

export const inviteUserToOrganisation = ({ email }) => {
    return {
        type: 'INVITE_USER_TO_ORGANISATION',
        payload: { email }
    }
}

export const inviteMultipleUsersToOrganisation = ({ emails }) => {
    return {
        type: 'INVITE_MULTIPLE_USERS_TO_ORGANISATION',
        payload: { emails }
    }
}

export const redirectToWorkspace = () => {
    return {
        type: 'REDIRECT_TO_WORKSPACE',
    }
}

export const hideFullScreen = () => {
    return {
        type: 'HIDE_FULL_SCREEN',
    }
}



export const revokeInviteUserToOrganisation = ({ id }) => {
    return {
        type: 'REVOKE_INVITE_USER_TO_ORGANISATION',
        payload: { inviteId: id }
    }
}

export const signUpToOrganisationViaToken = ({ invitetoken }) => {
    return {
        type: 'SIGNUP_TO_ORGANISATION_VIA_TOKEN',
        payload: { invitetoken }
    }
}

export const promoteUserToAdmin = ({ uid }) => {
    return {
        type: 'PROMOTE_USER_TO_ADMIN',
        payload: { uid }
    }
}

export const removeUserFromOrganisation = ({ uid }) => {
    return {
        type: 'REMOVE_USER_FROM_ORGANISATION',
        payload: { uid }
    }
}

export const updateOrganisationInformation = ({name, website}) => {
    return {
        type: 'UPDATE_TEAM_INFORMATION',
        payload: { name, website }
    }
}




