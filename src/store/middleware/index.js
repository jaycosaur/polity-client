import {db} from './../../config/firebase'

export function policySearchMiddleware() {
    return ({ dispatch, getState }) => next => action => {
      if (action.type == 'SUBMIT_POLICY_SEARCH') {
        const state = getState()
        const searchObject = {
            string: state.filter.keywordInput,
            filters: state.filter.filters
        }
      }
      return next(action);
    }
}

export function createPolicyWatchMiddleware() {
    return ({ dispatch, getState }) => next => action => {
        if (action.type == 'CREATE_POLICY_WATCH') {
            const state = getState()
            const watchObject = {
                uid: state.user.user.uid,
                created: Date.now(),
                keywords: state.filter.keywordInput,
                title: state.popover.selectedModalFields.watchAlertTitle,
                alertFrequency: state.popover.selectedModalFields.watchAlertFrequency,
                filters: state.filter.filters,
                watchedItemIds: [1,2,3,4,5,6,7]
            }

            dispatch({ type: "CREATE_POLICY_WATCH", payload: db.collection("watchlists").doc(state.user.user.uid).collection('watchlists').add(watchObject)})
        }
        return next(action);
    }
}

export function getWatchlistItems() {
    return ({ dispatch, getState }) => next => action => {
        if (action.type == 'FETCH_WATCHLIST_ITEMS') {
            const state = getState()
            const watchlistRef = db.collection("watchlists").doc(state.user.user.uid).collection('watchlists')
            const watchlistItemArray = []
            dispatch({ type: "FETCH_WATCHLIST_ITEMS", payload: watchlistRef.get().then(res => {
                res.forEach(doc => watchlistItemArray.push({id: doc.id, ...doc.data()}))
                return watchlistItemArray
            })})
        }
        return next(action);
    }
}

export function deleteWatchlistItem() {
    return ({ dispatch, getState }) => next => action => {
        if (action.type == 'DELETE_WATCHLIST_ITEM') {
            const state = getState()
            const watchlistItemRef = db.collection("watchlists").doc(state.user.user.uid).collection('watchlists').doc(action.meta)
            dispatch({ type: "DELETE_WATCHLIST_ITEM", payload: watchlistItemRef.delete(), meta: action.meta})
        }
        return next(action);
    }
}

export function saveNewsSettingMiddleware() {
    return ({ dispatch, getState }) => next => action => {
        if (action.type == 'SAVE_NEWS_SETTINGS') {
            const state = getState()
            const newsObject = {
                uid: state.user.user.uid,
                lastUpdate: Date.now(),
                searchTags: state.news.searchTags,
                receiveEmailAlerts: false
            }
            dispatch({ type: "SAVE_NEWS_SETTINGS", payload: db.collection("newsalerts").doc(state.user.user.uid).set(newsObject)})
        }
        return next(action);
    }
}

export function getNewsSettingItems() {
    return ({ dispatch, getState }) => next => action => {
        if (action.type == 'FETCH_NEWS_SETTINGS') {
            const state = getState()
            const newsSettingsRef = db.collection("newsalerts").doc(state.user.user.uid)
        
            dispatch({ type: "FETCH_NEWS_SETTINGS", payload: newsSettingsRef.get().then(res => {
                return res.data()
            })})
        }
        return next(action);
    }
}