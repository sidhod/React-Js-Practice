const intialState = {
    result: '0'
}
export const addreducer = (state = intialState, action) => {
    switch (action.type) {
        case 'add':
            {
                console.log(action)
                return {
                    result: action.data
                }
            }
        case 'sub':
            {
                console.log(action)
                return {
                    result: action.data
                }
            }
        default:
            {
                return state
            }
    }
}