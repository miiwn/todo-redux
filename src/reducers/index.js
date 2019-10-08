import { combineReducers } from 'redux'
import { DELETE_TEXT, ADD_TEXT, EDIT_TEXT } from 'src/actions/todo';
import { LOGIN, LOGOUT } from 'src/actions/login';


const allTextReducer = (allText = [], action) => {
    if (action.type === ADD_TEXT) {
        return [...allText, action.payload]
    } else if (action.type === DELETE_TEXT) {
        return allText.filter((item) => item.key !== action.payload)
    } else if (action.type === EDIT_TEXT) {
        const index = allText.findIndex((item) => {
            return item.key === action.payload.key;
        });
        const array = [...allText]
        array[index].text = action.payload.newText
        return array
    }
    return allText
}
const logReducer = (logs = [], action) => {
    if (action.type === ADD_TEXT || action.type === DELETE_TEXT) {
        return [...logs, {
            type: action.type,
            text: action.payload
        }]
    }
    return logs
}

const initialProfileReducer = {}
const profileReducer = (profile = initialProfileReducer, action) => {
    if (action.type === LOGIN) {
        return action.payload
    } else if (action.type === LOGOUT) {
        return initialProfileReducer
    }
    return profile
}


export default combineReducers({
    allTexts: allTextReducer,
    logs: logReducer,
    profile: profileReducer
})