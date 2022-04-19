import {createStore} from "redux";
import {combineReducers} from "redux";
import {persistReducer} from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'
import reducer from "./reducer";

const persistConfig = {
    key: 'persist-k',
    storage,
}

const reducers = combineReducers({reducer})
const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {

    return{
        ...createStore(persistedReducer, composeWithDevTools())
    }
}