import { shallow } from "enzyme";
import React from "react";
import List from "./List";
import ListItem from "./ListItem";

describe("ListItem", () => {
  it("renders", () => {
    const wrapper = shallow(<ListItem>Testing</ListItem>);
    expect(wrapper.find("li").length).toBe(1);
  });
  it("renders it's children", () => {
    const wrapper = shallow(<ListItem>One</ListItem>);
    expect(wrapper.contains("One")).toBeTruthy();
  });
});

describe("List", () => {
  it("renders", () => {
    const wrapper = shallow(<List>Testing</List>);
    expect(wrapper.find("ul").length).toBe(1);
  });
  it("renders it's children", () => {
    const wrapper = shallow(
      <List>
        <ListItem>1</ListItem>
      </List>
    );
    expect(wrapper.contains(<ListItem>1</ListItem>)).toBeTruthy();
  });
  it("renders with 3 list items", () => {
    const wrapper = shallow(
      <List>
        <ListItem>1</ListItem>
        <ListItem>2</ListItem>
        <ListItem>3</ListItem>
      </List>
    );
    expect(wrapper.find("ul").children().length).toBe(3);
  });
});
