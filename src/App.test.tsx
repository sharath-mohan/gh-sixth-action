import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, it, expect } from "vitest"; // Explicitly import if globals are not enabled

describe("App Component", () => {
  it("renders the welcome message", () => {
    render(<App />);
    expect(screen.getByText("App")).toBeInTheDocument();
  });
});
