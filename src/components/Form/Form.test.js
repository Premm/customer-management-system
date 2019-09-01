import { shallow } from "enzyme";
import React from "react";
import Form from "./Form";

describe("Form", () => {
  it("renders", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find("form").length).toBe(1);
  });
  it("handles onSubmit event", () => {
    const spyOnSubmit = jest.fn();
    const wrapper = shallow(<Form onSubmit={spyOnSubmit} />);
    wrapper.simulate("submit");
    expect(spyOnSubmit).toHaveBeenCalled();
  });
});
