import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";

describe("Button Component", () => {
  test("renders with default props", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("renders with primary color and hover color", () => {
    const onClick = jest.fn();
    const primaryColor = "#007bff";
    const hoverColor = "#0056b3";
    render(
      <Button
        onClick={onClick}
        primaryColor={primaryColor}
        hoverColor={hoverColor}
      >
        Click me
      </Button>
    );
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`--primary-color: ${primaryColor}`);
    expect(button).toHaveStyle(`--hover-color: ${hoverColor}`);
  });
});
