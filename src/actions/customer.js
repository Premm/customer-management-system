import {
  customerSet,
  customerRemove,
  filteredCustomersSet
} from "../constants/actions/customer";

export const setCustomer = ({ customerID, customer }) => dispatch => {
  //API call here to save to db
  dispatch(customerSet({ customerID, customer }));
};

export const removeCustomer = customerID => dispatch => {
  //API call here to update db
  dispatch(customerRemove(customerID));
};

export const setFilteredCustomers = (customers, query) => dispatch => {
  //API call here to save to db
  dispatch(filteredCustomersSet(customers, query));
};
