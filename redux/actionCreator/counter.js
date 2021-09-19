import * as actionTypes from "@redux/actionTypes/counter";
// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: actionTypes.INCREMENT });

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: actionTypes.DECREMENT });

// RESET COUNTER
export const resetCount = () => ({ type: actionTypes.RESET });
