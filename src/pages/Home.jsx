import React from "react";
import C from "classnames";
import T from "prop-types";
import { connect } from "react-redux";
import { setCustomer, removeCustomer } from "../actions/customer";

import Page from "../templates/Page";

import { List, ListItem } from "../components/List";
import Button from "../components/Button";

const HomePage = ({ customers }) => {
  return (
    <Page>
      <h1>Customer Management System</h1>
      <Button type="primary" size="large" to="/add">
        Add Customer
      </Button>
      <List>
        <ListItem>
          <h3>Customer ID</h3>
          <h3>First Name</h3>
          <h3>Last Name</h3>
          <h3>DoB</h3>
          <h3>Actions</h3>
        </ListItem>
        {customers &&
          Object.keys(customers).map(key => (
            <>
              <ListItem>
                <h3>Customer ID</h3>
                <h3>First Name</h3>
                <h3>Last Name</h3>
                <h3>DoB</h3>
                <h3>Actions</h3>
              </ListItem>
            </>
          ))}
      </List>
    </Page>
  );
};

HomePage.propTypes = {
  children: T.node
};

HomePage.defaultProps = {
  children: null
};

const mapStateToProps = state => ({
  customers: state.customerState.customers
});

export default connect(
  mapStateToProps,
  { setCustomer, removeCustomer }
)(HomePage);
