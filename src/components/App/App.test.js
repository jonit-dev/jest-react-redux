import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const app = shallow(<App />);

// unit test => check small piece of behaviour

describe("check App component basic functionality", () => {
  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });
});
