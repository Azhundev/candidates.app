import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    addCandidate,
    updateCandidate,
    deleteCandidate,
    getCandidate,
    getAllCandidates
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login({username, password})  
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function addCandidate(candidate) {
    return dispatch => {
        dispatch(request(candidate));

        userService.addCandidate(candidate)
            .then(
                user => {
                    dispatch(success());
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );

        function request(candidate) { return { type: userConstants.ADD_CANDIDATE_REQUEST, candidate } }
        function success(candidate) { return { type: userConstants.ADD_CANDIDATE_SUCCESS, candidate } }
        function failure(error) { return { type: userConstants.ADD_CANDIDATE_FAILURE, error } }
    }
}

function updateCandidate(cand_id, candidate) {
    return dispatch => {
        dispatch(request({ candidate }));

        userService.updateCandidate(cand_id, candidate)
            .then(
                user => {
                    dispatch(success());
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );

        function request(candidate) { return { type: userConstants.UPDATE_CANDIDATE_REQUEST, candidate } }
        function success() { return { type: userConstants.UPDATE_CANDIDATE_SUCCESS } }
        function failure(error) { return { type: userConstants.UPDATE_CANDIDATE_FAILURE, error } }
    }
}

function deleteCandidate(cand_id) {
    return dispatch => {
        dispatch(request(cand_id));

        userService.deleteCandidate(cand_id)
            .then(
                user => {
                    dispatch(success());
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(cand_id) { return { type: userConstants.DELETE_CANDIDATE_REQUEST, cand_id } }
    function success() { return { type: userConstants.DELETE_CANDIDATE_SUCCESS } }
    function failure(error) { return { type: userConstants.DELETE_CANDIDATE_FAILURE, error } }
}

function getCandidate(cand_id) {
    return dispatch => {
        dispatch(request(cand_id));

        userService.getCandidate()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request(cand_id) { return { type: userConstants.GET_CANDIDATE_REQUEST, cand_id } }
    function success(candidate) { return { type: userConstants.GET_CANDIDATE_SUCCESS, candidate } }
    function failure(error) { return { type: userConstants.GET_CANDIDATE_FAILURE, error } }
}

function getAllCandidates() {
    return dispatch => {
        dispatch(request());

        userService.getAllCandidates()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_CANDIDATES_REQUEST } }
    function success(candidates) { return { type: userConstants.GETALL_CANDIDATES_SUCCESS, candidates } }
    function failure(error) { return { type: userConstants.GETALL_CANDIDATES_FAILURE, error } }
}


