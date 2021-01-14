import { combineReducers } from 'redux';
import { allClients } from '../modules/Client/reducer'
const rootReducer = combineReducers({
    allClients
})
export default rootReducer;