import * as Types from "../constants/types";

const INITIAL_STATE = {
  customers: {}
};

const applySetCustomer = (state, action) => {
  return {
    ...state,
    customers: { ...state.customers, [action.customerID]: action.customer }
  };
};

const applyRemoveCustomer = (state, action) => {
  const newCustomers = {};
  //create a new array without the customer that matches the customerID passed in.
  Object.keys(state.customers).forEach(key => {
    if (key !== action.customerID) {
      newCustomers[key] = state.customers[key];
    }
  });
  return {
    ...state,
    customers: newCustomers
  };
};

function customerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CUSTOMER_SET: {
      return applySetCustomer(state, action);
    }
    case Types.CUSTOMER_REMOVE: {
      return applyRemoveCustomer(state, action);
    }
    default:
      return state;
  }
}

export default customerReducer;
