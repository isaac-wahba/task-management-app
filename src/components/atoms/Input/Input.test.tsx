import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "./Input";

describe("Input Component", () => {
  test("renders with placeholder", () => {
    const placeholder = "Enter text";
    render(<Input placeholder={placeholder} value="" onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  test("handles typing", () => {
    const placeholder = "Enter text";
    const onChange = jest.fn();
    render(<Input placeholder={placeholder} value="" onChange={onChange} />);
    const inputElement = screen.getByPlaceholderText(placeholder);
    fireEvent.change(inputElement, { target: { value: "Hello" } });
    expect(onChange).toHaveBeenCalledWith("Hello");
  });
});
