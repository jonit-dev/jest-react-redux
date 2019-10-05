import { ADD_GIFT, DELETE_GIFT } from "./types";

export const addGift = gift => dispatch => {
  dispatch({ type: ADD_GIFT, payload: gift });
};

export const deleteGift = id => dispatch => {
  console.log("deleting item");
  dispatch({ type: DELETE_GIFT, payload: id });
};
