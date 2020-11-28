import React from "react";
import Directory from "./Directory";
import { shallow } from "enzyme";

it("expect to render Directory component", () => {
  const mockSections = [
    {
      title: "",
      imageUrl: "",
      size: "",
      id: "29e6f882-a9a1-5b76-b90c-6bdd411f285c",
      linkUrl: "",
    },
  ];

  expect(shallow(<Directory />).length).toEqual(1);
});
