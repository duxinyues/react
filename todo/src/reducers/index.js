import {combineReducers} from 'redux'
import todos from './todo'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    todos,
    visibilityFilter
})