import React from "react";
import { shallow } from "enzyme";
import Timer from "./Timer";

describe("App", () => {
   it("should render a <div />", () => {
      const container = shallow(<Timer />);
      expect(container.find("div").length).toBeGreaterThanOrEqual(1);
   });
});
