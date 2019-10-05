import { ADD_GIFT, DELETE_GIFT } from "../actions/types";

const INITIAL_STATE = {
  gifts: [{ id: 1, description: "hello world", person: "myself" }]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_GIFT:
      return {
        ...state,
        gifts: [...state.gifts, action.payload]
      };

    case DELETE_GIFT:
      return {
        ...state,
        gifts: [...state.gifts.filter(gift => gift.id !== action.payload)]
      };

    default:
      return state;
  }
};

/*

 =========  Safe state update in reducers =========

// From arrays
Removing: state.filter(element => element !== 'hi');
adding: [...state, 'hi'];
replacing: state.map(el => el === 'hi' ? 'bye': el);

//From objects
updating: {...state, name: 'Sam'};
adding: {...state, age: 30};
removing: {state, age: undefined }

*/
