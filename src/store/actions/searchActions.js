export const getSearch = ({query, filters, key, page=0, searchType}) => {
    return {
        type: 'GET_SEARCH',
        payload: { 
            filters: null,
            key: key, 
            type: searchType,
            query,
            saveSearch: false,
            page
        }
    }
}


export const submitSearchNews = ({query, filters}) => {
    return {
        type: 'GET_SEARCH',
        payload: { 
            filters: null,
            key: 'topnav-search', 
            type: 'MEDIA',
            query,
        }
    }
}

export const submitBaseSearch = ({query, filters, page}) => {
    return {
        type: 'GET_SEARCH',
        payload: { 
            filters: null,
            key: 'main-search', 
            query,
            page
        }
    }
}

export const submitActionManagerSearch = ({query, filters}) => {
    return {
        type: 'GET_SEARCH',
        payload: { 
            filters: null,
            key: 'action-manager-search', 
            query,
        }
    }
}

export const globalSearch = ({query, filters, key}) => {
    return {
        type: 'GET_SEARCH',
        payload: { 
            filters: null,
            key: key, 
            type: 'MEDIA',
            query, 
            attrs: {
                hitsPerPage: 20
            },
            saveSearch: false
        }
    }
}