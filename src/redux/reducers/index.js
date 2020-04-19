import status from './status'
import sort from './sort'
import { combineReducers } from 'redux'

const myReducers = combineReducers({
    status,
    sort
})

export default myReducers



