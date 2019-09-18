import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

import { removeCustomer, setFilteredCustomers } from "../actions/customer";

import Page from "../templates/Page";
import Button from "../components/Button";
import { Table, TableRow, TableHead, TableData } from "../components/Table";
import Input from "../components/Input";

import { Customer } from "../constants/interfaces/Customer";

const StyledTopBar = styled.div`
  &.top-bar-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

interface HomePageProps
  extends RouteComponentProps<any>,
    StateProps,
    DispatchProps {
  removeCustomer: typeof removeCustomer;
  setFilteredCustomers: typeof setFilteredCustomers;
}

const HomePage = ({
  customers,
  filteredCustomers,
  removeCustomer,
  setFilteredCustomers,
  history
}: HomePageProps) => {
  const [data, setData] = useState<{ search: string }>({ search: "" });

  const onEdit = (customerID: string) => {
    history.push(`/edit/${customerID}`);
  };

  const onRemove = (customerID: string) => {
    removeCustomer(customerID);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
              filteredCustomers.map(tempCustomer => {
                return (
                  <>
                    <TableRow key={tempCustomer.id}>
                      <TableData>
                        <span>{tempCustomer.firstName}</span>
                      </TableData>
                      <TableData>
                        <span>{tempCustomer.lastName}</span>
                      </TableData>
                      <TableData>
                        <span>{tempCustomer.dob}</span>
                      </TableData>
                      <TableData>
                        <Button
                          type="primary"
                          size="small"
                          onClick={() => onEdit(tempCustomer.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          type="secondary"
                          size="small"
                          onClick={() => onRemove(tempCustomer.id)}
                        >
                          Delete
                        </Button>
                      </TableData>
                    </TableRow>
                  </>
                );
              })
            : customers &&
              customers.map(tempCustomer => (
                <>
                  <TableRow key={tempCustomer.id}>
                    <TableData>
                      <span>{tempCustomer.firstName}</span>
                    </TableData>
                    <TableData>
                      <span>{tempCustomer.lastName}</span>
                    </TableData>
                    <TableData>
                      <span>{tempCustomer.dob}</span>
                    </TableData>
                    <TableData>
                      <Button
                        type="primary"
                        size="small"
                        onClick={() => onEdit(tempCustomer.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        type="secondary"
                        size="small"
                        onClick={() => onRemove(tempCustomer.id)}
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

interface StateProps {
  customers: Customer[];
  filteredCustomers: Customer[];
}

interface DispatchProps {
  removeCustomer: typeof removeCustomer;
  setFilteredCustomers: typeof setFilteredCustomers;
}

const mapStateToProps = (state: any): StateProps => ({
  customers: state.customerState.customers,
  filteredCustomers: state.customerState.filteredCustomers
});

export default connect(
  mapStateToProps,
  { removeCustomer, setFilteredCustomers }
)(withRouter(HomePage));
