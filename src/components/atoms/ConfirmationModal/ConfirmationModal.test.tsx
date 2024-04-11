import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ConfirmationModal from "./ConfirmationModal";

describe("ConfirmationModal Component", () => {
  test("renders with isOpen=true and handles confirm and cancel actions", () => {
    const onConfirm = jest.fn();
    const onCancel = jest.fn();
    render(
      <ConfirmationModal
        isOpen={true}
        onConfirm={onConfirm}
        onCancel={onCancel}
        message="Are you sure?"
      />
    );
    const message = screen.getByText("Are you sure?");
    expect(message).toBeInTheDocument();
    const confirmButton = screen.getByText("Yes");
    const cancelButton = screen.getByText("No");
    fireEvent.click(confirmButton);
    fireEvent.click(cancelButton);
    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
