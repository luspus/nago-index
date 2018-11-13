const initialState = {
    formValues: []
}
export default (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_REGISTATION_VALUES':
            console.log('form values', action.payload)
            return {
                ...state,
                result: action.payload
            }
        default:
            return state
    }
}