import React from "react";
import C from "classnames";
import T from "prop-types";
import { connect } from "react-redux";
import { setCustomer, removeCustomer } from "../actions/customer";

import Page from "../templates/Page";
import Button from "../components/Button";
import Input from "../components/Input";
import Form from "../components/Form";

const AddPage = ({ customers }) => {
  const onSubmit = () => {
    console.log("submitted form");
  };
  return (
    <Page>
      <h1>Customer Management System</h1>
      <Button type="primary" size="large" to="/add">
        Add Customer
      </Button>
      <Form onSubmit={onSubmit}>
        <Input inputType="text" placeholder="First Name" />
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
)(AddPage);
