const intialState = {
    label1: "xyz",
    label2: "abc"
}
export const ButtonReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'start':
            console.log(action)
            return {
                label1: "abc",
                label2: "xyz"
            };
        case 'start1':
            console.log(action)
            return {
                label2: "abc",
                label1: "xyz"
            };
        default:
            return state

    }
}
