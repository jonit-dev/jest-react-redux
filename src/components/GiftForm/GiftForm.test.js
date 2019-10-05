import React from "react";
import { shallow } from "enzyme";
import GiftForm from "./GiftForm";

const giftForm = shallow(<GiftForm />);

// unit test => check small piece of behaviour

describe("Check if component is initialized correctly", () => {
  it("renders correctly", () => {
    expect(giftForm).toMatchSnapshot();
  });

  it("initializes state correctly", () => {
    expect(giftForm.state()).toStrictEqual({
      person: "",
      gift: {
        description: "",
        name: ""
      },
      gifts: []
    });
  });
});
