import { fetchWrapper } from '../_helpers';

const baseUrl = `http://localhost:8080/api/user`;

export const adminService = {
    addUser,
    getAllUsers,
    deleteUser
};

function addUser(params) {
    return fetchWrapper.post(baseUrl, params);
}

function getAllUsers() {
    return fetchWrapper.get(`${baseUrl}/all`);
}

function deleteUser(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}