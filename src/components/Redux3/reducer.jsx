const intialState = {
    label: 'Sai'
}
export const buttonReducers = (state = intialState, action) => {
    switch (action.type) {
        case 'onclick':
            console.log(action)
            return {
                label: 'Sidhodhan'
            }
        default:
            return state
    }
}