import {
  customerSet,
  customerRemove,
  filteredCustomersSet
} from "../constants/actions/customer";
import { Customer } from "../constants/interfaces/Customer";
import { ThunkDispatch } from "redux-thunk";

export const setCustomer = (customer: Customer) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  //API call here to save to db
  dispatch(customerSet(customer));
};

export const removeCustomer = (customerID: number) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  //API call here to update db
  dispatch(customerRemove(customerID));
};

export const setFilteredCustomers = (customers: Customer[], query: string) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  //API call here to save to db
  dispatch(filteredCustomersSet(customers, query));
};
