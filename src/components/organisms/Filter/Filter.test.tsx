import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Filter from "./Filter";
import { TASK_STATUS } from "../../../enums/common";
import { Option } from "../../../types/common";

describe("Filter Component", () => {
  const mockSelectedFilter = TASK_STATUS.PENDING;
  const mockFilterOptions: Option[] = [
    { value: TASK_STATUS.PENDING, label: "Pending" },
    { value: TASK_STATUS.COMPLETED, label: "Completed" },
    { value: TASK_STATUS.ALL, label: "All" },
  ];

  test("renders filter component correctly", () => {
    const onSelectFilter = jest.fn();
    const { container } = render(
      <Filter
        selectedFilter={mockSelectedFilter}
        filterOptions={mockFilterOptions}
        onSelectFilter={onSelectFilter}
      />
    );

    expect(container).toBeInTheDocument();
  });
});
