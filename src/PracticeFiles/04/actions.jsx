export const addition = (no1, no2) => {
    let result = parseInt(no1) + parseInt(no2)
    return {
        type: 'add',
        data: result
    }
}
export const substraction = (no1, no2) => {
    let result = parseInt(no1) - parseInt(no2)
    return {
        type: 'sub',
        data: result
    }
}