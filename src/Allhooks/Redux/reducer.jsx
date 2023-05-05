const intialState = {
    res: 'Find'

}
export const buttonRed = (state = intialState, action) => {
    switch (action.type) {
        case 'new':
            return {
                res: 'Not Find'
            }

        default:
            return state
    }
}