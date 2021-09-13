
import { ADD_TASKS, GET_TASKS } from './types';
//import tasks from './../data';

export const getTasks = (data) => {
    return {
        type: GET_TASKS,
        tasks: data 
    }
}

export const addTodo = (todo) => {

    if(todo === "") return ;
    
        return {
            type: ADD_TASKS,
            todo: todo
        }
}

