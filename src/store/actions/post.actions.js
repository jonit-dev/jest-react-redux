import axios from "axios";
import { FETCH_POSTS } from "./types";
export const getPosts = () => async dispatch => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  dispatch({ type: FETCH_POSTS, payload: response.data });
};
