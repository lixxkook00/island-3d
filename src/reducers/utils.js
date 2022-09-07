const initialState = false

const loadingPage = (state = initialState , action) => {
    switch (action.type) {
        case 'ACTVE':
            return true

        case 'REMOVE':
            return false

        default:
            return false;
    }
}

export { loadingPage };