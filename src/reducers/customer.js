import * as Types from "../constants/types";

const INITIAL_STATE = {
  customers: {}
};

const applySetCustomer = (state, action) => ({
  ...state,
  customers: { ...state.customers, [action.customerID]: action.customer }
});

const applyRemoveCustomer = (state, action) => ({
  ...state,
  customers: state.customers ? delete state.customers[action.customerID] : {}
});

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
