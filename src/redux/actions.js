
import { GET_TASKS } from './types';
import tasks from './../data';

export const getTasks = (data) => {
    return {
        type: GET_TASKS,
        tasks: data 
    }
}

