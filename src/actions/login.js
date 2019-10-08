import { makeId } from 'src/services/RandomId'
import store from 'src/configs/store.config'


export const LOGIN = "LOGIN"
export const login = (name) => {
    return {
        type: LOGIN,
        payload: {
            key: makeId(),
            name: name
        }
    }
}

export const LOGOUT = "LOGOUT"
export const logout = () => {
    const { profile } = store.getState();
    return {
        type: LOGOUT,
        payload: profile.key
    }
}