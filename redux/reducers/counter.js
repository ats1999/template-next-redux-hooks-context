import * as actionTypes from "@redux/actionTypes/counter";
const counterReducer = (state = 0, { actionType }) => {
  switch (actionType) {
    case actionTypes.INCREMENT:
      return state + 1;
    case actionTypes.DECREMENT:
      return state - 1;
    case actionTypes.RESET:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
