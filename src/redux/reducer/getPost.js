import { GET_POST } from "../action";

const initialState = {
  post: [],
}

export default function GetPost(state = initialState, action) {

  switch (action.type) {
    case GET_POST:
      return {
          ...state,
          post: action.payload,
      }

    default:
      return state;
  }
}
