import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../pages";
import getMetaDescription from "./utils/getMetaDescription";
const userStory = `
Given no inital state,
When user navigates to the home page,
Then user sees the static information
`;
describe(userStory, () => {
  it("shows the correct headers, and the map attribution", async () => {
    render(<App />);
    await waitFor(() => screen.findByText("Singapore Land Authority"));
    expect(screen.getByText("Maps")).toBeInTheDocument();
    const metaCollection = document.getElementsByTagName("meta");
    const descriptionMeta = getMetaDescription(0, (metaCollection as unknown) as HTMLMetaElement[]);
    expect(descriptionMeta).toEqual("A demo map app for demonstrating software techniques.");
    await waitFor(() => screen.findByTestId("render-count-map-1"));
  });
});
