const intialState = {
    text: 'Sai'
}
export const ButtonReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'click1':
            {
                console.log(action)
                return {
                    text: 'Sidhodhan'
                }
            }
        case 'click2':
            {
                console.log(action)
                return {
                    text: 'Sid'
                }
            }
        default:
            return state
    }
}