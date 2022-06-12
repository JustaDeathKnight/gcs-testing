import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  // Ciclo de vida de una prueba

  // me permite inicializar el componente y poder utilizar las funciones de testing-library, creando una instancia de la prueba

  // beforeEach(() => {}) // antes de cada prueba
  // beforeAll(() => {}) // antes de todas las pruebas

  // afterEach(() => {}) // despues de cada prueba
  // afterAll(() => {}) // despues de todas las pruebas

  beforeEach(() => {
    render(<Counter />);
  });

  // snapshot inicial, covertura? (snapshot)
  it("Snapshot inicial", () => {
    expect(screen.getByRole("counter")).toMatchSnapshot();
  });

  it("Test al componente Counter donde el titulo y estado rendericen correctamente", () => {
    expect(screen.getByText("Counter: 0").tagName).toBe("H2");
  });

  it("Verificar que el click -1 funcione correctamente", () => {
    userEvent.click(screen.getByLabelText("decrementar"));

    expect(screen.getByRole("counter").textContent).toContain("Counter: -1");
  });

  it("Verificar que el click +1 funcione correctamente", () => {
    userEvent.click(screen.getByLabelText("incrementar"));

    expect(screen.getByRole("counter").textContent).toContain("Counter: 1");
  });

  it("Verificar que el click +1 x3 funcione correctamente", () => {
    userEvent.click(screen.getByLabelText("incrementar"));
    userEvent.click(screen.getByLabelText("incrementar"));
    userEvent.click(screen.getByLabelText("incrementar"));

    expect(screen.getByRole("counter").textContent).toContain("Counter: 3");
  });

  it("Simular que alguien interactua con la app", () => {
    const btnAdd = screen.getByLabelText("incrementar");
    const btnSub = screen.getByLabelText("decrementar");

    userEvent.click(btnAdd);
    userEvent.click(btnAdd);
    userEvent.click(btnAdd);
    userEvent.click(btnAdd);
    userEvent.click(btnAdd);
    userEvent.click(btnAdd);

    expect(screen.getByRole("counter").textContent).toContain("Counter: 6");

    userEvent.click(btnSub);
    userEvent.click(btnSub);
    userEvent.click(btnSub);
    userEvent.click(btnSub);
    userEvent.click(btnSub);
    userEvent.click(btnSub); // 0
    userEvent.click(btnSub);
    userEvent.click(btnSub);
    userEvent.click(btnSub);

    expect(screen.getByRole("counter").textContent).toContain("Counter: -3");
  });

  it("Verificar el funcionamiento del boton reset", () => {
    const btnAdd = screen.getByLabelText("incrementar");

    userEvent.click(btnAdd);
    userEvent.click(btnAdd);
    userEvent.click(btnAdd);
    userEvent.click(btnAdd);
    userEvent.click(btnAdd);
    userEvent.click(btnAdd);

    userEvent.click(screen.getByLabelText("reset"));

    expect(screen.getByRole("counter").textContent).toContain("Counter: 0");
  });
  
});
