import { combineReducers } from 'redux';
import imagesReducer from './images/imagesSlice'

const rootReducer = combineReducers({
    images: imagesReducer
})

export default rootReducer;