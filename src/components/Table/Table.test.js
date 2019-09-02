import { mount } from "enzyme";
import React from "react";
import { ThemeProvider } from "styled-components";
import Table from "./Table";
import TableData from "./TableData";
import TableRow from "./TableRow";
import TableHead from "./TableHead";

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

const createWrapperWithTheme = component => {
  return mount(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Table", () => {
  it("renders", () => {
    const wrapper = createWrapperWithTheme(<Table />);
    expect(wrapper.find("table").length).toBe(1);
  });
});
describe("TableRow", () => {
  it("renders", () => {
    const wrapper = createWrapperWithTheme(
      <Table>
        <tbody>
          <TableRow />
        </tbody>
      </Table>
    );
    expect(wrapper.find("tr").length).toBe(1);
  });
});
describe("TableData", () => {
  it("renders", () => {
    const wrapper = createWrapperWithTheme(
      <Table>
        <tbody>
          <TableRow>
            <TableData />
          </TableRow>
        </tbody>
      </Table>
    );
    expect(wrapper.find("td").length).toBe(1);
  });
});
describe("TableHead", () => {
  it("renders", () => {
    const wrapper = createWrapperWithTheme(
      <Table>
        <tbody>
          <TableRow>
            <TableHead />
          </TableRow>
        </tbody>
      </Table>
    );
    expect(wrapper.find("th").length).toBe(1);
  });
});
