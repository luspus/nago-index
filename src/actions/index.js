const saveFormValues = (obj) => dispatch => {
    dispatch({
        type: 'SAVE_REGISTATION_VALUES',
        payload: obj
    })
}

export default saveFormValues