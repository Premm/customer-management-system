import { CUSTOMER_SET, CUSTOMER_REMOVE, FILTERED_CUSTOMER_SET } from "../types";
import { Customer } from "../../interfaces/Customer";

export const customerSet = (customerID: Number, customer: Customer) => ({
  type: CUSTOMER_SET,
  customerID,
  customer
});

export const customerRemove = (customerID: Number) => ({
  type: CUSTOMER_REMOVE,
  customerID
});

export const filteredCustomersSet = (customers: Customer[], query: String) => ({
  type: FILTERED_CUSTOMER_SET,
  customers,
  query
});
