import { userConstants } from '../_constants';

export function user(state = {}, action) {
  switch (action.type) {
    case userConstants.ADD_CANDIDATE_REQUEST:
      return {
        adding: true
      };
    case userConstants.ADD_CANDIDATE_SUCCESS:
      return {
        items: action.candidate
      };
    case userConstants.ADD_CANDIDATE_FAILURE:
      return {
        error: action.error
      };

    case userConstants.UPDATE_CANDIDATE_REQUEST:
      return {
        loading: true
      };
    case userConstants.UPDATE_CANDIDATE_SUCCESS:
      return {};
    case userConstants.UPDATE_CANDIDATE_FAILURE:
      return {
        error: action.error
      };

    case userConstants.DELETE_CANDIDATE_REQUEST:
      return {
        loading: true
      };
    case userConstants.DELETE_CANDIDATE_SUCCESS:
      return {};
    case userConstants.DELETE_CANDIDATE_FAILURE:
      return {
        error: action.error
      };

    case userConstants.GET_CANDIDATE_REQUEST:
      return {
        loading: true
      };
    case userConstants.GET_CANDIDATE_SUCCESS:
      return {
        items: action.candidate
      };
    case userConstants.GET_CANDIDATE_FAILURE:
      return {
        error: action.error
      };

    case userConstants.GETALL_CANDIDATES_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_CANDIDATES_SUCCESS:
      return {
        items: action.candidates
      };
    case userConstants.GETALL_CANDIDATES_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}