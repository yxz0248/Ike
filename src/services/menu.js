import request from '../utils/request'

export function fetch({ role = 'admin' }) {
    return request(`/api/menu?_role=${role}`);
}