import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DropDown from "./DropDown";

describe("DropDown Component", () => {
  test("renders successfully with props", () => {
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ];
    const selectedOption = options[0];
    const onSelect = jest.fn();
    const { container } = render(
      <DropDown
        options={options}
        selectedOption={selectedOption}
        onSelect={onSelect}
      />
    );
    expect(container).toBeInTheDocument();
  });
});
