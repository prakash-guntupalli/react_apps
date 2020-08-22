import { ADD, TOGGLE } from './constants';

let tempId = 0;

export const addTask = (task) => {
    return {
        type : ADD,
        payload : {
            task,
            id: ++tempId
        }
    }
}

export const toggleStatus = (id, status) => {
    return {
        type : TOGGLE,
        payload : {
            id,
            status
        }
    }
}