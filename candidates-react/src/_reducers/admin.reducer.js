import { adminConstants } from '../_constants';

const initialState = {
  isFetching: false,
  items: [],
  error: []
}

export function admin(state = initialState, action) {
  switch (action.type) {
    case adminConstants.ADD_USER_REQUEST:
      return {
        adding: true
      };
    case adminConstants.ADD_USER_SUCCESS:
      return {
        items: action.user
      };
    case adminConstants.ADD_USER_FAILURE:
      return {
        error: action.error
      };

    case adminConstants.GETALL_USERS_REQUEST:
      return {
        isFetching: true
      };
    case adminConstants.GETALL_USERS_SUCCESS:
      return {
        isFetching: false,
        items: action.users
      };
    case adminConstants.GETALL_USERS_FAILURE:
      return {
        error: action.error
      };

    case adminConstants.DELETE_USER_REQUEST:
      return {
        isFetching: true
      };
    case adminConstants.DELETE_USER_SUCCESS:
      return {
        isFetching: false
      };
    case adminConstants.DELETE_USER_FAILURE:
      return {
        error: action.error
      };

    default:
      return state
  }
}