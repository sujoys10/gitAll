import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import imageReducer  from './reducer/gallery'

const rootReducer = combineReducers({imageReducer});
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));