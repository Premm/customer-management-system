import { CUSTOMER_SET, CUSTOMER_REMOVE, FILTERED_CUSTOMER_SET } from "../types";
import { Customer } from "../interfaces/Customer";

export const customerSet = (customer: Customer) => ({
  type: CUSTOMER_SET,
  customer
});

export const customerRemove = (customerID: number) => ({
  type: CUSTOMER_REMOVE,
  customerID
});

export const filteredCustomersSet = (customers: Customer[], query: string) => ({
  type: FILTERED_CUSTOMER_SET,
  customers,
  query
});
