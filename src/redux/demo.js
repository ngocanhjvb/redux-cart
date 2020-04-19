import {createStore} from 'redux';
import myReducer from './reducers/index'
import {sort, status} from "./actions";


const store = createStore(myReducer);
console.log(store.getState())

store.dispatch(status())


console.log(store.getState())

store.dispatch(sort({
    by: 'something',
    value: 2
}))

console.log(store.getState())
