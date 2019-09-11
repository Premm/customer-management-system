import {
  customerSet,
  customerRemove,
  filteredCustomersSet
} from "../constants/actions/customer";
import { Customer } from "../interfaces/Customer";
import { ThunkDispatch } from "redux-thunk";

export const setCustomer: Function = (
  customerID: Number,
  customer: Customer
) => (dispatch: ThunkDispatch<{}, {}, any>) => {
  //API call here to save to db
  dispatch(customerSet(customerID, customer));
};

export const removeCustomer = (customerID: Number) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  //API call here to update db
  dispatch(customerRemove(customerID));
};

export const setFilteredCustomers = (customers: Customer[], query: String) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  //API call here to save to db
  dispatch(filteredCustomersSet(customers, query));
};
