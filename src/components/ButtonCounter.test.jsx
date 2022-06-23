import { render, screen } from "@testing-library/react";
import ButtonCounter from "./ButtonCounter";

describe("ButtonCounter", () => {
  // mock function to test the onClick event of the button component
  const action = jest.fn();

  it("should render correctly", () => {
    render(<ButtonCounter />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("render del boton incrementar", () => {
    render(
      <ButtonCounter name="incrementar" style="btn btn-outline-success" />
    );

    expect(screen.getByText("incrementar")).toBeInTheDocument();
  });

  it("render del boton decrementar", () => {
    render(<ButtonCounter name="decrementar" style="btn btn-outline-danger" />);

    expect(screen.getByText("decrementar")).toBeInTheDocument();
  });

  it("should call the action function when the button is clicked", () => {
    render(<ButtonCounter value={3} name="aumentar" action={action} />);

    expect(screen.getByLabelText("aumentar")).toBeInTheDocument();
  });
});
