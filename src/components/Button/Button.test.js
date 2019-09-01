import { shallow } from "enzyme";
import React from "react";
import Button from "./Button";

describe("Button", () => {
  it("renders", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find("button").length).toBe(1);
  });
  it("renders with small class", () => {
    const wrapper = shallow(<Button size="small" />);
    expect(wrapper.find("button.sm")).toBeTruthy();
  });
  it("renders with primary class", () => {
    const wrapper = shallow(<Button type="primary" />);
    expect(wrapper.find("button.primary")).toBeTruthy();
  });
  it("renders with primary class", () => {
    const wrapper = shallow(<Button type="primary" />);
    expect(wrapper.find("button.primary")).toBeTruthy();
  });
  it("handles onClick", () => {
    const spyOnClick = jest.fn();
    const wrapper = shallow(<Button onClick={spyOnClick} />);
    wrapper.simulate("click");
    expect(spyOnClick).toHaveBeenCalled();
  });
});
