import { mount } from "enzyme";
import React from "react";
import { ThemeProvider } from "styled-components";
import Button from "./Button";
const theme = {
  colors: {
    primary: "#ffd028",
    primaryDark: "#e3b922",
    secondary: "#1b1b1b",
    secondaryDark: "#121212",
    light: "#f4f7ee",
    dark: "#29272c",
    grey: "#dfdfdf",
    warning: "#e94516"
  },
  layout: {
    padding: "10px 20px",
    borderRadius: "5px;"
  },
  fontFamily: "Roboto, sans-serif"
};

const createWrapperWithTheme = (component: any) => {
  return mount(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
describe("Button", () => {
  it("renders", () => {
    const wrapper = createWrapperWithTheme(<Button />);
    expect(wrapper.find("button").length).toBe(1);
  });
  it("renders with small class", () => {
    const wrapper = createWrapperWithTheme(<Button size="small" />);
    expect(wrapper.find("button.sm")).toBeTruthy();
  });
  it("renders with primary class", () => {
    const wrapper = createWrapperWithTheme(<Button type="primary" />);
    expect(wrapper.find("button.primary")).toBeTruthy();
  });
  it("handles onClick event", () => {
    const spyOnClick = jest.fn();
    const wrapper = createWrapperWithTheme(<Button onClick={spyOnClick} />);
    wrapper.simulate("click");
    expect(spyOnClick).toHaveBeenCalled();
  });
});
