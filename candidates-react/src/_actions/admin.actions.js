import { adminConstants } from '../_constants';
import { adminService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const adminActions = {
    addUser,
    getAllUsers,
    deleteUser
};

function addUser(user) {
    return dispatch => {
        dispatch(request(user));

        adminService.addUser(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/');
                    dispatch(alertActions.success('User Added'))
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );

        function request(user) { return { type: adminConstants.ADD_USER_REQUEST, user } }
        function success(user) { return { type: adminConstants.ADD_USER_SUCCESS, user } }
        function failure(error) { return { type: adminConstants.ADD_USER_FAILURE, error } }
    }
}

function getAllUsers() {
    return dispatch => {
        dispatch(request());

        adminService.getAllUsers()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: adminConstants.GETALL_USERS_REQUEST } }
    function success(users) { return { type: adminConstants.GETALL_USERS_SUCCESS, users } }
    function failure(error) { return { type: adminConstants.GETALL_USERS_FAILURE, error } }
}

function deleteUser(user_id) {
    return dispatch => {
        dispatch(request(user_id));

        adminService.deleteUser(user_id)
            .then(
                user => {
                    dispatch(success());
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user_id) { return { type: adminConstants.DELETE_USER_REQUEST, user_id } }
    function success() { return { type: adminConstants.DELETE_USER_SUCCESS } }
    function failure(error) { return { type: adminConstants.DELETE_USER_SUCCESS, error } }
}