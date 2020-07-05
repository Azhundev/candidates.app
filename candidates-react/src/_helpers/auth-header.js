import { fetchWrapper } from '../_helpers';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = fetchWrapper.currentUserValue;
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer ${currentUser.token}` };
    } else {
        return {};
    }
}