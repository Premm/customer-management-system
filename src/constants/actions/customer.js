import { CUSTOMER_SET, CUSTOMER_REMOVE } from "../types";

export const customerSet = ({ customerID, customer }) => ({
  type: CUSTOMER_SET,
  customerID,
  customer
});

export const customerRemove = customerID => ({
  type: CUSTOMER_REMOVE,
  customerID
});
