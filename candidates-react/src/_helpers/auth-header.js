import { fetchWrapper } from './fetch-wrapper';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = fetchWrapper.currentUserValue;
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer ${currentUser.token}` };
    } else {
        return {};
    }
}