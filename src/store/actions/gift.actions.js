import { ADD_GIFT, DELETE_GIFT } from "./types";

export const addGift = gift => {
  return { type: ADD_GIFT, payload: gift };
};

export const deleteGift = id => {
  return { type: DELETE_GIFT, payload: id };
};
