import { mount } from "enzyme";
import React from "react";
import { ThemeProvider } from "styled-components";
import Input from "./Input";

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

describe("Input", () => {
  it("renders", () => {
    const wrapper = createWrapperWithTheme(
      <Input name="test" value="testing" />
    );
    expect(wrapper.find("input").length).toBe(1);
  });
  it("renders with a small class", () => {
    const wrapper = createWrapperWithTheme(
      <Input name="test" value="testing" size="small" />
    );
    expect(wrapper.find("input.sm")).toBeTruthy();
  });
  it("renders with a primary class", () => {
    const wrapper = createWrapperWithTheme(
      <Input name="test" value="testing" type="primary" />
    );
    expect(wrapper.find("input.primary")).toBeTruthy();
  });
  it("handles onChange event", () => {
    const spyOnChange = jest.fn();
    const wrapper = createWrapperWithTheme(
      <Input name="test" value="testing" onChange={spyOnChange} />
    );
    wrapper.simulate("change");
    expect(spyOnChange).toHaveBeenCalled();
  });
});
