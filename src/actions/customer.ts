import {
  customerSet,
  customerRemove,
  filteredCustomersSet
} from "../constants/actions/customer";
import { Customer } from "../constants/interfaces/Customer";

export const setCustomer = (customer: Customer) => (dispatch: any) => {
  // I dont know what type dispatch should  be.
  //API call here to save to db
  return dispatch(customerSet(customer));
};

export const removeCustomer = (customerID: string) => (dispatch: any) => {
  //API call here to update db
  return dispatch(customerRemove(customerID));
};

export const setFilteredCustomers = (customers: Customer[], query: string) => (
  dispatch: any
) => {
  //API call here to save to db
  return dispatch(filteredCustomersSet(customers, query));
};
