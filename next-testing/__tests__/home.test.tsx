import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("should have Docs text", () => {
    render(<Home />); //Arrange
    const myElement = screen.getByText("Docs"); //ACT
    expect(myElement).toBeInTheDocument(); //ASSERT
  });
  it("should contain the text 'information'", () => {
    render(<Home />); //Arrange
    const myElement = screen.getByText(/information/i); //ACT
    expect(myElement).toBeInTheDocument(); //ASSERT
  });
  it("should have a heading", () => {
    render(<Home />); //Arrange
    const myElement = screen.getByRole("heading", {
      name: "Learn",
    }); //ACT
    expect(myElement).toBeInTheDocument(); //ASSERT
  });
});
