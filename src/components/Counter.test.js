import { render } from "@testing-library/react";
import Counter from "./Counter";



test("Test al componente Counter", () => {
  const wrapper = render(<Counter />);
  expect(wrapper.getByText("Counter: 0").tagName).toBe("H2");
});
