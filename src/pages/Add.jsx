import React, { useState, useEffect } from "react";
import T from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setCustomer, removeCustomer } from "../actions/customer";

import Page from "../templates/Page";
import Button from "../components/Button";
import Input from "../components/Input";
import Form from "../components/Form";

const AddPage = ({ customers, setCustomer, history, match }) => {
  const [data, setData] = useState({});

  const onChange = e => {
    const name = e.target.name;
    const val = e.target.value;
    setData(d => ({ ...d, [name]: val }));
  };

  useEffect(() => {
    customers[match.params.customerID] &&
      setData({
        firstName: customers[match.params.customerID].firstName,
        lastName: customers[match.params.customerID].lastName,
        dob: customers[match.params.customerID].dob
      });
  }, [match.params.customerID, customers]);

  const onSubmit = e => {
    e.preventDefault();
    if (match.params.customerID) {
      setCustomer({ customerID: match.params.customerID, customer: data });
    } else {
      setCustomer({ customerID: Date.now(), customer: data });
    }
    history.push("/");
  };
  return (
    <Page>
      <h1>Customer Management System</h1>
      <Form onSubmit={onSubmit}>
        <Input
          inputType="text"
          name="firstName"
          placeholder="First Name"
          value={data.firstName}
          onChange={onChange}
        />
        <Input
          inputType="text"
          name="lastName"
          placeholder="Last Name"
          value={data.lastName}
          onChange={onChange}
        />
        <Input
          inputType="date"
          name="dob"
          placeholder="DoB"
          value={data.dob}
          onChange={onChange}
        />
        <Button type="primary" size="large">
          Add Customer
        </Button>
      </Form>
    </Page>
  );
};

AddPage.propTypes = {
  children: T.node
};

AddPage.defaultProps = {
  children: null
};

const mapStateToProps = state => ({
  customers: state.customerState.customers
});

export default connect(
  mapStateToProps,
  { setCustomer }
)(withRouter(AddPage));
