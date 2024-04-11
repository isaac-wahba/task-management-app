import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MainLayout from "./MainLayout";

describe("MainLayout Component", () => {
  test("renders header with correct title", () => {
    render(<MainLayout children={<></>} />);
    const headerTitle = screen.getByRole("heading", { level: 1 });
    expect(headerTitle).toBeInTheDocument();
    expect(headerTitle).toHaveTextContent("Task Manager");
  });

  test("renders children correctly", () => {
    const TestComponent = () => <div data-testid="test">Test Component</div>;
    render(
      <MainLayout>
        <TestComponent />
      </MainLayout>
    );
    const testComponent = screen.getByTestId("test");
    expect(testComponent).toBeInTheDocument();
    expect(testComponent).toHaveTextContent("Test Component");
  });
});
