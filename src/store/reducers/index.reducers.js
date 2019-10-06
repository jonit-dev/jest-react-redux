/*#############################################################|
|                        REDUCERS
*##############################################################*/

import { combineReducers } from "redux";
import giftReducer from "./gift.reducer";
import postsReducer from "./posts.reducer";

export default combineReducers({
  giftsReducer: giftReducer,
  postsReducer: postsReducer
});
