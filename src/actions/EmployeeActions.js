import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
  }
}

export const employeeCreate = (employeeDetails) => {
  return {
    type: EMPLOYEE_CREATE,
    payload: employeeDetails,
  }
}