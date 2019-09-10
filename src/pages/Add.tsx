import React, { useState, useEffect } from "react";
import T from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { setCustomer } from "../actions/customer";

import Page from "../templates/Page";
import Button from "../components/Button";
import Input from "../components/Input";
import Form from "../components/Form";

const StyledAddForm = styled.div`
  form {
    width: 600px;
    display: flex;
    flex-direction: column;
    .input-group {
      box-sizing: border-box;
      display: flex;
      flex: 1;
      padding: 10px 0;
      width: 100%;
    }
  }
`;

const AddPage = ({ customers, setCustomer, history, match }) => {
  const [data, setData] = useState({});

  const onChange = e => {
    const name = e.target.name;
    const val = e.target.value;
    setData(d => ({ ...d, [name]: val }));
  };

  useEffect(() => {
    //updates the form data if a customerID is passed in through the URL.
    customers[match.params.customerID] &&
      setData({
        firstName: customers[match.params.customerID].firstName,
        lastName: customers[match.params.customerID].lastName,
        dob: customers[match.params.customerID].dob
      });
  }, [match.params.customerID, customers]);

  const onSubmit = e => {
    e.preventDefault();
    //make sure first name and last name are set.
    if (data.firstName && data.lastName) {
      if (match.params.customerID) {
        // if a customerID was passed into the URL it means we are editing, so update that customer.
        setCustomer({ customerID: match.params.customerID, customer: data });
      } else {
        // Otherwise create a new one.
        // For the sake of this challenge, I'm just using Date.now() as a uid for this project,
        // in a real product I'd use a library like uuid (https://www.npmjs.com/package/uuid).
        setCustomer({ customerID: Date.now(), customer: data });
      }
      history.push("/");
    }
  };

  return (
    <Page>
      <h1>Customer Management System</h1>
      <StyledAddForm>
        <Form onSubmit={onSubmit}>
          <div className="input-group">
            <Input
              inputType="text"
              name="firstName"
              placeholder="First Name"
              value={data.firstName}
              onChange={onChange}
            />
          </div>
          <div className="input-group">
            <Input
              inputType="text"
              name="lastName"
              placeholder="Last Name"
              value={data.lastName}
              onChange={onChange}
            />
          </div>
          <div className="input-group">
            <Input
              inputType="date"
              name="dob"
              placeholder="DoB"
              value={data.dob}
              onChange={onChange}
            />
          </div>
          <Button type="primary" size="large">
            Add Customer
          </Button>
        </Form>
      </StyledAddForm>
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
