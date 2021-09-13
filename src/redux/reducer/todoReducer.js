
//import tasks from './../../data';
import { ADD_TASKS, GET_TASKS } from "../types";
const initialState = {
    tasks:[
        {
            text: "javascript",
            complete: true,
            id: Math.random()
        },
        {
            text: "Vue.js Typescript",
            complete: false,
            id: Math.random()
        },
        {
            text: "Phyton",
            complete: true,
            id: Math.random()
        },
        {
            text: "Jquery Vue.js",
            complete: false,
            id: Math.random()
        }
    ]
}

const todoReducer = (state=initialState, action) => {

    // eslint-disable-next-line default-case
    switch(action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: state.tasks
            }
        case ADD_TASKS: 
            return {
                ...state,
                tasks: [action.todo, ...state.tasks]
            }
            default: 
                return state;
    }

}

export default todoReducer;