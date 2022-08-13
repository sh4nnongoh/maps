import React from "react";
import { render, screen } from "@testing-library/react";
import Map from "../views/Map";
const userStory = `
Given no inital state,
When user navigates to the web page,
Then user sees the static information
`;
describe(userStory, () => {
  render(<Map />);
  it("shows the map attribution", () => {
    const linkElement = screen.getByText(/Singapore Land Authority/i);
    expect(linkElement).toBeInTheDocument();
  });
});
