import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  APPEND_USER,
} from "store/actions/users";

const INITIAL_STATE = {
  users: [],
};

export default function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };
    case APPEND_USER: {
      return {
        ...state,
        users: [...state.users, action.user],
      };
    }
    default:
      return state;
  }
}
