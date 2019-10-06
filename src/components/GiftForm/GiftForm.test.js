import React from "react";
import { shallow } from "enzyme";
import { GiftForm } from "./GiftForm";
import { ADD_GIFT, DELETE_GIFT, FETCH_POSTS } from "../../store/actions/types";
import { addGift, deleteGift } from "../../store/actions/gift.actions";
import giftReducer from "../../store/reducers/gift.reducer";

import { getPosts } from "../../store/actions/post.actions";
import mockStore from "../../store/reduxMockStore";
import fetchMock from "fetch-mock";

//setup the gift shallow
const mockRemove = jest.fn();
const id = 1;
const props = {
  gifts: [{ id: 1, description: "hello world", person: "myself" }],
  gift: {
    description: "",
    person: ""
  },
  removeGift: mockRemove,
  getPosts: getPosts(),
  posts: []
};

const giftForm = shallow(<GiftForm {...props} />);

/*#############################################################|
|  >>> DEFAULT REACT COMPONENT TESTING
*##############################################################*/

describe("Make sure component is bootstrapping correctly", () => {
  // Initialize mockstore with empty state

  it("renders the component correctly", () => {
    expect(giftForm).toMatchSnapshot();
  });

  it("initializes state correctly", () => {
    expect(giftForm.state().gift).toEqual({
      description: "",
      person: ""
    });
  });
});

/*#############################################################|
 |  >>> REDUX
 *##############################################################*/

const gift = {
  id: 2,
  description: "second gift",
  person: "chuck norris"
};

// Reducers ========================================

describe("Reducers: giftReducer", () => {
  it("should return default state", () => {
    const INITIAL_STATE = giftReducer(undefined, {});
    expect(INITIAL_STATE).toEqual({
      gifts: [{ id: 1, description: "hello world", person: "myself" }]
    });
  });

  it("should add a new gift if addGift action is triggered", () => {
    const updatedState = giftReducer(undefined, {
      type: ADD_GIFT,
      payload: gift
    });

    expect(updatedState).toEqual({
      gifts: [
        { id: 1, description: "hello world", person: "myself" },
        { id: 2, description: "second gift", person: "chuck norris" }
      ]
    });
  });

  it("should remove gift when deleteGift is triggered", () => {
    const id = 1;

    const updatedState = giftReducer(undefined, {
      type: DELETE_GIFT,
      payload: id
    });

    expect(updatedState).toEqual({
      gifts: []
    });
  });
});

// Actions (sync) ========================================

describe("Actions: Synchronous gift actions working properly", () => {
  it("should create an action to add a gift", () => {
    const expectedAction = { type: ADD_GIFT, payload: gift };

    expect(addGift(gift)).toEqual(expectedAction);
  });

  it("should create an action to remove a gift", () => {
    const expectedAction = { type: DELETE_GIFT, payload: 1 };

    expect(deleteGift(1)).toEqual(expectedAction);
  });
});

// Actions (async) ========================================

// describe("Actions: Asynchronous gift actions should work properly", () => {
//   afterEach(() => {
//     fetchMock.restore();
//   });

//   it("calls getPosts and update store successfully", () => {
//     const posts = [
//       {
//         userId: 1,
//         id: 1,
//         title:
//           "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         body:
//           "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//       },
//       {
//         userId: 1,
//         id: 2,
//         title: "qui est esse",
//         body:
//           "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//       }
//     ];

//     fetchMock.getOnce("https://jsonplaceholder.typicode.com/posts", {
//       body: {
//         data: posts
//       },
//       headers: { "content-type": "application/json" }
//     });

//     const expectedActions = [{ type: FETCH_POSTS, payload: posts }];

//     const store = mockStore({ posts: [] });

//     return store.dispatch(getPosts()).then(() => {
//       console.log(store.getActions());
//       const actions = store.getActions();

//       expect(actions).toBe(expectedActions);
//     });
//   });
// });
