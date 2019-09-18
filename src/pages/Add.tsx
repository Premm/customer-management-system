import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

import { setCustomer } from "../actions/customer";

import Page from "../templates/Page";
import Button from "../components/Button";
import Input from "../components/Input";
import Form from "../components/Form";

import { Customer } from "../constants/interfaces/Customer";

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

interface AddPageProps
  extends RouteComponentProps<any>,
    StateProps,
    DispatchProps {
  setCustomer: typeof setCustomer;
}

const AddPage = ({ customers, setCustomer, history, match }: AddPageProps) => {
  const [data, setData] = useState<Customer>({
    id: "",
    firstName: "",
    lastName: "",
    dob: ""
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.name;
    const val: string = e.target.value;
    setData(d => ({ ...d, [name]: val }));
  };

  useEffect(() => {
    //updates the form data if a customerID is passed in through the URL.
    let flag = true;
    customers &&
      match.params.customerID &&
      customers.forEach(tempCustomer => {
        if (tempCustomer.id === match.params.customerID) {
          setData({
            id: tempCustomer.id,
            firstName: tempCustomer.firstName,
            lastName: tempCustomer.lastName,
            dob: tempCustomer.dob
          });
          flag = false;
        }
      });
    if (flag) {
      setData(d => ({
        ...d,
        id: Date.now().toString()
      }));
    }
  }, [match.params.customerID, customers]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //make sure first name and last name are set.
    if (setCustomer && data.firstName && data.lastName) {
      if (data.id) {
        setCustomer(data);
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

interface StateProps {
  customers: Customer[];
}

interface DispatchProps {
  setCustomer: typeof setCustomer;
}

const mapStateToProps = (state: any): StateProps => ({
  customers: state.customerState.customers
});

export default connect(
  mapStateToProps,
  { setCustomer }
)(AddPage);
