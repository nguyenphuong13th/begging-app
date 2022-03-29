import {createStore,combineReducers,applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import thunk from'redux-thunk'
import {StaffsReducer} from'./Staffs'
export const ConfigureStore=()=>{
    const store = createStore(
        combineReducers({
            staffs:StaffsReducer,
        }),
        applyMiddleware(thunk,logger)
    );
    return store
}