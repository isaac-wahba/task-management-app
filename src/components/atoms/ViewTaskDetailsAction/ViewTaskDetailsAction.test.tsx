import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import ViewTaskDetailsAction from "./ViewTaskDetailsAction";

describe("ViewTaskDetailsAction Component", () => {
  test("renders correctly with link", () => {
    const link = "/tasks/1";
    render(
      <MemoryRouter>
        <ViewTaskDetailsAction link={link} />
      </MemoryRouter>
    );
    const icon = screen.getByAltText("view details");
    expect(icon).toBeInTheDocument();
  });
});
