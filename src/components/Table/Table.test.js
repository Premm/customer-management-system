import { shallow } from "enzyme";
import React from "react";
import { Table, TableData, TableHead, TableRow } from "./index";
describe("Table", () => {
  it("renders", () => {
    const wrapper = shallow(<Table />);
    expect(wrapper.find("table").length).toBe(1);
  });
});
describe("TableRow", () => {
  it("renders", () => {
    const wrapper = shallow(<TableRow />);
    expect(wrapper.find("tr").length).toBe(1);
  });
});
describe("TableData", () => {
  it("renders", () => {
    const wrapper = shallow(<TableData />);
    expect(wrapper.find("td").length).toBe(1);
  });
});
describe("TableHead", () => {
  it("renders", () => {
    const wrapper = shallow(<TableHead />);
    expect(wrapper.find("th").length).toBe(1);
  });
});
