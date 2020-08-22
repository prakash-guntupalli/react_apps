import { ADD, TOGGLE } from './constants';

const initState = [];

const ListReducer = (state = initState, action) => {
    switch(action.type){
        case ADD : {
            let { task, id } = action.payload;
            return [
                ...state, 
                {
                    id: id,
                    name : task,
                    completed : false
                }
            ]
        }

        case TOGGLE : {
            let { id, status } = action.payload;
            let currentTask = state.filter( i => i.id === id);
            currentTask[0].completed = status;
            let newState = state.filter( i => {
                return i.id !== id;
            })
            return [...newState, currentTask[0]];
        }

        default :
            return state;
    }
}

export default ListReducer;