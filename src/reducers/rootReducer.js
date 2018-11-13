import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import reducer from '../reducers/index'

export default combineReducers({
    reducer,
    form: formReducer
});