export const activeLoading = (status) => {
    return {
        type: 'ACTVE',
        payload: status,
    }
}

export const removeLoading = (status) => {
    return {
        type: 'REMOVE',
        payload: status,
    }
}