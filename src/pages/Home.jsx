import React from "react";
import C from "classnames";
import T from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setCustomer, removeCustomer } from "../actions/customer";

import Page from "../templates/Page";

import Button from "../components/Button";
import { Table, TableRow, TableHead, TableData } from "../components/Table";

const HomePage = ({ customers, removeCustomer, history }) => {
  const onEdit = customerID => {
    history.push(`/edit/${customerID}`);
  };

  const onRemove = customerID => {
    removeCustomer(customerID);
  };

  return (
    <Page>
      <h1>Customer Management System</h1>
      <Button type="primary" size="large" to="/add">
        Add Customer
      </Button>
      <Table>
        <thead>
          <TableRow>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>DoB</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {customers &&
            Object.keys(customers).map(key => (
              <>
                <TableRow>
                  <TableData>
                    <span>{customers[key].firstName}</span>
                  </TableData>
                  <TableData>
                    <span>{customers[key].lastName}</span>
                  </TableData>
                  <TableData>
                    <span>{customers[key].dob}</span>
                  </TableData>
                  <TableData>
                    <Button
                      type="primary"
                      size="small"
                      onClick={() => onEdit(key)}
                    >
                      Edit
                    </Button>
                    <Button
                      type="secondary"
                      size="small"
                      onClick={() => onRemove(key)}
                    >
                      Delete
                    </Button>
                  </TableData>
                </TableRow>
              </>
            ))}
        </tbody>
      </Table>
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
)(withRouter(HomePage));
