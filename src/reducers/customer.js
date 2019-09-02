import * as Types from "../constants/types";

const INITIAL_STATE = {
  customers: {},
  filteredCustomers: {}
};

const applySetCustomer = (state, action) => {
  return {
    ...state,
    customers: { ...state.customers, [action.customerID]: action.customer }
  };
};

const applyRemoveCustomer = (state, action) => {
  const newCustomers = {};
  //create a new array without the customer matching the customerID passed in.
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

const applySetFilteredCustomers = (state, action) => {
  const filteredCustomers = {};
  Object.keys(action.customers).forEach(key => {
    if (action.customers[key].firstName.includes(action.query)) {
      filteredCustomers[key] = action.customers[key];
    }
    if (action.customers[key].lastName.includes(action.query)) {
      filteredCustomers[key] = action.customers[key];
    }
  });

  return {
    ...state,
    filteredCustomers: filteredCustomers
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
    case Types.FILTERED_CUSTOMER_SET: {
      return applySetFilteredCustomers(state, action);
    }
    default:
      return state;
  }
}

export default customerReducer;
