import React from "react";
import HomePage from "./HomePage";
import { shallow } from "enzyme";

// shallow = renders only the component and not it's child components
// mount = does a full dom render. js-dom is recommended
// render = uses a lib named cheerio to test static rendered dom

it("expect to render HomePage component", () => {
  expect(shallow(<HomePage />).length).toEqual(1);
});

it("expect to match snapshot", () => {
  expect(shallow(<HomePage />)).toMatchSnapshot();
});
