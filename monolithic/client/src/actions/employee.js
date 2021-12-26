import axios from "axios";
import {proxy, GET_ALL_EMPLOYEES, CREATE_EMPLOYEE, DELETE_EMPLOYEE} from "./types";

export const getEmployees = (token, shopId) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    const res = await axios.get(proxy+'/api/employees/'+shopId, config);
    dispatch({
        type: GET_ALL_EMPLOYEES,
        payload: res.data
    });
}
export const createEmployee = (token, shopId, name, age) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    const res = await axios.post(proxy+'/api/employees', {
        shopId,
        name,
        age
    }, config);
    dispatch({
        type: CREATE_EMPLOYEE,
        payload: res.data
    });
    dispatch(getEmployees(token, shopId));

}
export const deleteEmployee = (token, id, shopId) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    const res = await axios.delete(proxy+'/api/employees/emp/'+id, config);
    dispatch({
        type: DELETE_EMPLOYEE,
        payload: res.data
    });
    dispatch(getEmployees(token, shopId));
}