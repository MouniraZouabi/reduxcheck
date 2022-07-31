import { CHANGE_IS_DONE } from "../Constants/action-types";
import { EDIT_TASK } from "../Constants/action-types";
import { ADD_TASK } from "../Constants/action-types";
export const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload: payload,
    };
};

export const editTask = (payload) => {
    return {
        type: EDIT_TASK,
        payload: payload,
    };
};

export const changeIsDone = (payload) => {
    return {
        type: CHANGE_IS_DONE,
        payload: payload,
    };
};