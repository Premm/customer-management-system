import * as Types from "../constants/types";
import { Customer } from "../constants/interfaces/Customer";
const INITIAL_STATE = {
  customers: [],
  filteredCustomers: []
};

interface State {
  customers: Customer[];
  filteredCustomers: Customer[];
}

interface CustomerAction
  extends SetCustomerAction,
    RemoveCustomerAction,
    FilterCustomersAction {}

interface SetCustomerAction {
  type: string;
  customerID: string;
  customer: Customer;
}

interface RemoveCustomerAction {
  type: string;
  customerID: string;
}
interface FilterCustomersAction {
  type: string;
  customers: Customer[];
  query: string;
}

const applySetCustomer = (state: State, action: SetCustomerAction) => {
  const newCustomers: Customer[] = state.customers;
  let flag = true;
  //check if a customer with that ID already exists. (im sure there's a better es6 way to do this now.)
  newCustomers.forEach((tempCustomer, i) => {
    if (tempCustomer.id === action.customer.id) {
      newCustomers[i] = action.customer;
      flag = false;
    }
  });
  //if the customer was never added, push it into the last spot.
  if (flag) {
    newCustomers.push(action.customer);
  }
  return {
    ...state,
    customers: newCustomers
  };
};

const applyRemoveCustomer = (state: State, action: RemoveCustomerAction) => {
  const newCustomers: Customer[] = [];
  //create a new array, skipping the customer matching the customerID passed in.
  state.customers.forEach(tempCustomer => {
    if (tempCustomer.id !== action.customerID) {
      newCustomers.push(tempCustomer);
    }
  });
  return {
    ...state,
    customers: newCustomers
  };
};

const applySetFilteredCustomers = (
  state: State,
  action: FilterCustomersAction
) => {
  const filteredCustomers: Customer[] = [];
  action.customers.forEach(tempCustomer => {
    if (tempCustomer.firstName.includes(action.query)) {
      filteredCustomers.push(tempCustomer);
    }
    if (tempCustomer.lastName.includes(action.query)) {
      filteredCustomers.push(tempCustomer);
    }
  });

  return {
    ...state,
    filteredCustomers: filteredCustomers
  };
};

function customerReducer(state: State = INITIAL_STATE, action: CustomerAction) {
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
