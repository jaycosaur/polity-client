export const createProjectInManager = (val) => {
    return {
        type: 'CREATE_PROJECT_IN_MANAGER',
        payload: {
            title: val.title,
            description: val.description,
        }
    }
}

export const deleteProjectInManager = ({projectId}) => {
    return {
        type: 'DELETE_PROJECT_IN_MANAGER',
        payload: {
            projectId
        }
    }
}

export const openCreateProjectsInManagerDialogue = () => {
    return {
        type: 'OPEN_CREATE_PROJECTS_IN_MANAGER_DIALOGUE',
    }
}

export const closeCreateProjectsInManagerDialogue = () => {
    return {
        type: 'CLOSE_CREATE_PROJECTS_IN_MANAGER_DIALOGUE',
    }
}

export const openUpdateProjectsInManagerDialogue = () => {
    return {
        type: 'OPEN_UPDATE_PROJECTS_IN_MANAGER_DIALOGUE',
    }
}

export const closeUpdateProjectsInManagerDialogue = () => {
    return {
        type: 'CLOSE_UPDATE_PROJECTS_IN_MANAGER_DIALOGUE',
    }
}

export const getProjectsInManager = () => {
    return {
        type: 'SUBSCRIBE_TO_PROJECTS_IN_MANAGER',
    }
}

export const handleProjectFavorite = ({ isFavorited }) => {
    return {
        type: 'UPDATE_PROJECT_IN_MANAGER',
        payload: {
            isFavorited
        }
    }
}

export const updateProjectInManager = ({title, description}) => {
    return {
        type: 'UPDATE_PROJECT_IN_MANAGER',
        payload: {
            title,
            description
        }
    }
}

export const selectProjectInManager = ({projectId}) => {
    return {
        type: 'SELECT_PROJECT_IN_MANAGER',
        payload: {
            projectId
        }
    }
}

export const getProjectInManager = ({projectId}) => {
    return {
        type: 'GET_PROJECT_IN_MANAGER',
        meta: {
            projectId
        }
    }
}

export const createActionInProject = ({parentActionId=null, form={}}) => {
    return {
        type: 'CREATE_ACTION_IN_PROJECT',
        payload: {
            parentActionId,
            title: form.title,
        },
    }
}

export const getActionsInProject = () => {
    return {
        type: 'SUBSCRIBE_TO_ACTIONS_IN_PROJECT',
    }
}

export const deleteActionInProject = ({actionId}) => {
    return {
        type: 'DELETE_ACTION_IN_PROJECT',
        payload: {
            actionId
        }
    }
}

export const selectActionInProject = ({actionId}) => {
    return {
        type: 'SELECT_ACTION_IN_PROJECT',
        payload: {
            actionId
        }
    }
}

export const deselectActionInProject = () => {
    return {
        type: 'DESELECT_ACTION_IN_PROJECT'
    }
}

export const handleToggleActionUrgency = ({actionId}) => {
    return {
        type: 'HANDLE_TOGGLE_ACTION_AS_URGENT',
        payload: {
            actionId
        }
    }
}

//project related

export const updateActionInProjectFocused = (vals) => {
    return {
        type: 'UPDATE_ACTION_IN_PROJECT_FOCUSED',
        payload: {
            ...vals
        }
    }
}

export const updateActionInProject = ({toUpdate, actionId}) => {
    return {
        type: 'UPDATE_ACTION_IN_PROJECT',
        payload: {
            ...toUpdate
        },
        meta: {
            actionId
        }

    }
}

export const createTaskInAction = () => {
    return {
        type: 'CREATE_TASK_IN_ACTION',
    }
}

export const createNoteInAction = (payload) => {
    return {
        type: 'CREATE_NOTE_IN_ACTION',
        payload: payload
    }
}

export const updateTaskInAction = ({taskId, val}) => {
    return {
        type: 'UPDATE_TASK_IN_ACTION',
        payload: val,
        meta: {
            taskId
        }
    }
}

export const deleteTaskInAction = ({taskId}) => {
    return {
        type: 'DELETE_TASK_IN_ACTION',
        meta: {
            taskId
        }
    }
}


export const deleteFileInAction = ({fileId}) => {
    return {
        type: 'DELETE_FILE_IN_ACTION',
        meta: {
            fileId
        }
    }
}

export const updateNoteInAction = ({noteId, val}) => {
    return {
        type: 'UPDATE_NOTE_IN_ACTION',
        payload: val,
        meta: {
            noteId
        }
    }
}

export const uploadNewFilesToAction = ({files}) => {
    return {
        type: 'CREATE_FILE_IN_ACTION',
        payload: files,
    }
}

export const getTasksAssignedToCurrentUser = () => {
    return {
        type: 'GET_TASKS_ASSIGNED_TO_CURRENT_USER',
    }
}

export const getTeamSnapshotStatistics = () => {
    return {
        type: 'GET_TEAM_SNAPSHOT_STATISTICS',
    }
}

export const getCurrentUserAssignedTasksAndActions = () => {
    return {
        type: 'GET_CURRENT_USER_ASSIGNED_TASKS_AND_ACTIONS',
    }
}

