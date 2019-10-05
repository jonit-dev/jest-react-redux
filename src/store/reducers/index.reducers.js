/*#############################################################|
|                        REDUCERS
*##############################################################*/

import { combineReducers } from "redux";
import giftReducer from "./gift.reducer";

export default combineReducers({
  giftsReducer: giftReducer
});
