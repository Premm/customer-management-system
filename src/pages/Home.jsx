import React, { useState, useEffect } from "react";
import T from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { removeCustomer, setFilteredCustomers } from "../actions/customer";

import Page from "../templates/Page";

import Button from "../components/Button";
import { Table, TableRow, TableHead, TableData } from "../components/Table";
import Input from "../components/Input";
import styled from "styled-components";

const StyledTopBar = styled.div`
  &.top-bar-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const HomePage = ({
  customers,
  filteredCustomers,
  removeCustomer,
  setFilteredCustomers,
  history
}) => {
  const [data, setData] = useState({});

  const onEdit = customerID => {
    history.push(`/edit/${customerID}`);
  };

  const onRemove = customerID => {
    removeCustomer(customerID);
  };

  const onChange = e => {
    const name = e.target.name;
    const val = e.target.value;
    setData(d => ({ ...d, [name]: val }));
  };

  useEffect(() => {
    setFilteredCustomers(customers, data.search);
  }, [customers, data.search, setFilteredCustomers]);

  return (
    <Page>
      <h1>Customer Management System</h1>
      <StyledTopBar className="top-bar-container">
        <Button type="primary" size="large" to="/add">
          Add Customer
        </Button>
        <Input
          inputType="search"
          type="secondary"
          name="search"
          value={data.search}
          placeholder="Search..."
          onChange={onChange}
        />
      </StyledTopBar>
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
          {data.search
            ? filteredCustomers &&
              Object.keys(filteredCustomers).map(key => (
                <>
                  <TableRow key={key}>
                    <TableData>
                      <span>{filteredCustomers[key].firstName}</span>
                    </TableData>
                    <TableData>
                      <span>{filteredCustomers[key].lastName}</span>
                    </TableData>
                    <TableData>
                      <span>{filteredCustomers[key].dob}</span>
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
              ))
            : customers &&
              Object.keys(customers).map(key => (
                <>
                  <TableRow key={key}>
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
  customers: state.customerState.customers,
  filteredCustomers: state.customerState.filteredCustomers
});

export default connect(
  mapStateToProps,
  { removeCustomer, setFilteredCustomers }
)(withRouter(HomePage));
