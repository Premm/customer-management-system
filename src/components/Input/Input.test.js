import { shallow } from "enzyme";
import React from "react";
import Input from "./Input";

describe("Input", () => {
  it("renders", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find("input").length).toBe(1);
  });
  it("renders with a small class", () => {
    const wrapper = shallow(<Input size="small" />);
    expect(wrapper.find("input.sm")).toBeTruthy();
  });
  it("renders with a primary class", () => {
    const wrapper = shallow(<Input type="primary" />);
    expect(wrapper.find("input.primary")).toBeTruthy();
  });
  it("handles onChange event", () => {
    const spyOnChange = jest.fn();
    const wrapper = shallow(<Input onChange={spyOnChange} />);
    wrapper.simulate("change");
    expect(spyOnChange).toHaveBeenCalled();
  });
});
