import { fetchWrapper } from '../_helpers';

const baseUrl = `http://localhost:8080`;

export const userService = {
    login,
    logout,  
    addCandidate,
    updateCandidate,
    deleteCandidate,
    getCandidate,
    getAllCandidates
};

function login(params) {
    return fetchWrapper.login(`${baseUrl}/authenticate`, params);
}

function logout() {
    return fetchWrapper.logout();
}

function addCandidate(params) {
    return fetchWrapper.post(baseUrl, params);
}

function updateCandidate(id, params) {
    return fetchWrapper.put(`${baseUrl}/api/board/${id}`, params);
};

function deleteCandidate(id) {
    return fetchWrapper.delete(`${baseUrl}/api/board/${id}`);
}

function getCandidate(id) {
    return fetchWrapper.get(`${baseUrl}/api/board/${id}`);
}

function getAllCandidates() {
    return fetchWrapper.get(`${baseUrl}/api/board/all`);
}

