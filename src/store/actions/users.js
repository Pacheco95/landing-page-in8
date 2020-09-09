import api from "services";

function _fetchUsers() {
  return api.get("/user");
}

export const APPEND_USER = "APPEND_USER";
export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users },
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: { error },
});

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUsersBegin());

    return _fetchUsers()
      .then((response) => {
        dispatch(fetchUsersSuccess(response.data));
        return response.data;
      })
      .catch((error) => dispatch(fetchUsersFailure(error)));
  };
}

export function appendUser(user) {
  return { type: "APPEND_USER", user };
}
