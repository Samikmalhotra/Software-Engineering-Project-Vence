import {
    GET_ALL_EMPLOYEES, CREATE_EMPLOYEE, DELETE_EMPLOYEE
} from '../actions/types';

const initialState = {
    employees: [],
}   

function employee(state = initialState, action){
    const { type, payload } = action;
    
    switch(type){
        case GET_ALL_EMPLOYEES:
            return{
                employees: payload
            }
        case CREATE_EMPLOYEE:
        case DELETE_EMPLOYEE:
        default:
            return state;
    }
}

export default employee;