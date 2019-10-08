import { makeId } from 'src/services/RandomId'
export const ADD_TEXT = "ADD_TEXT"
export const addText = (text) => {
    return {
        type: ADD_TEXT,
        payload: {
            key: makeId(),
            text
        }
    }
}

export const EDIT_TEXT = "EDIT_TEXT"
export const editText = (key, newText) => {
    return {
        type: EDIT_TEXT,
        payload: {
            key: key,
            newText: newText
        }
    }
}

export const DELETE_TEXT = "DELETE_TEXT"
export const deleteText = (key) => {
    return {
        type: DELETE_TEXT,
        payload: key
    }
}
