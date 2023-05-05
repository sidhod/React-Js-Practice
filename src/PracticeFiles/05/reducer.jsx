const intialState = {
    text: ''
}
export const textReducer01 = (state = intialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'click':
            return {
                text: action.data.text
            }

        default:
            return state
    }
}