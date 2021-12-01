import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { timeReducer } from './reducers/timeReducer'

//reducers
import { todoReducer } from './reducers/todoReducer'



const persistConfig = {
    key:'root',
    storage: storage,
    whitelist: ['todosList', 'time'],
}

const reducer = combineReducers({todosList:todoReducer, time:timeReducer})
const rootReducer = persistReducer(persistConfig, reducer)

const middlewares = []

export const store = createStore(rootReducer, {} , composeWithDevTools(applyMiddleware(...middlewares)))
export const persistor = persistStore(store)