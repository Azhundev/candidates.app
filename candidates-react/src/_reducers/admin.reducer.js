import { adminConstants } from '../_constants';

export function admin(state = {}, action) {
  switch (action.type) {
    case adminConstants.ADD_USER_REQUEST:
      return {
        adding: true
      };
    case adminConstants.ADD_USER_SUCCESS:
      return {};
    case adminConstants.ADD_USER_FAILURE:
      return {
        error: action.error
      };

    case adminConstants.GETALL_USERS_REQUEST:
      return {
        loading: true
      };
    case adminConstants.GETALL_USERS_SUCCESS:
      return {
        items: action.users
      };
    case adminConstants.GETALL_USERS_FAILURE:
      return {
        error: action.error
      };

      case adminConstants.DELETE_USER_REQUEST:
        return {
          loading: true
        };
      case adminConstants.DELETE_USER_SUCCESS:
        return {};
      case adminConstants.DELETE_USER_FAILURE:
        return {
          error: action.error
        };

    default:
      return state
  }
}