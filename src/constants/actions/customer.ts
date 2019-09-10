import { CUSTOMER_SET, CUSTOMER_REMOVE, FILTERED_CUSTOMER_SET } from "../types";

export const customerSet = ({ customerID, customer }) => ({
  type: CUSTOMER_SET,
  customerID,
  customer
});

export const customerRemove = customerID => ({
  type: CUSTOMER_REMOVE,
  customerID
});

export const filteredCustomersSet = (customers, query) => ({
  type: FILTERED_CUSTOMER_SET,
  customers,
  query
});
