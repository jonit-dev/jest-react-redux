import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Header from "../Header";
import TestHelper from "../../../utils/TestHelper";

const renderApp = (props = {}) => {
  const app = shallow(<App {...props} />);
  return app;
};

describe("check App component basic functionality", () => {
  let app;
  beforeEach(() => {
    //setup app component properly, before each test
    app = renderApp();
  });
  it("should render correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("jumbotron should load correctly", () => {
    const jumbotron = TestHelper.findByTestAttr(app, "jumbotron");

    //you can debug a component code
    // console.log(jumbotron.debug());

    expect(jumbotron.length).toBe(1);
  });

  it("Header should render correctly", () => {
    const header = shallow(<Header />);

    expect(header.length).toBe(1);
  });
});
