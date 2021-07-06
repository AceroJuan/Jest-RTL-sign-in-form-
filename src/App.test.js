import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("test for app component", () => {
  test("username input renders correctly", () => {
    const { getByTestId } = render(<App />); // renders the component
    const usernameInput = getByTestId("usernameInput"); // gets the input node

    expect(usernameInput.value).toBe(""); // check the input's value is empty
  });

  test("password input renders correctly", () => {
    const { getByTestId } = render(<App />); // renders the component
    const passwordInput = getByTestId("passwordInput"); // gets the input node

    expect(passwordInput.value).toBe(""); // check the input's value is empty
  });

  test("submit button renders correctly", () => {
    const { getByTestId } = render(<App />); // renders the component
    const submitBtn = getByTestId("submitBtn"); // gets the input node

    expect(submitBtn.value).toBe("sign in"); // check the input's value is empty
  });

  test("valid userName", () => {
    const { getByTestId } = render(<App />); // renders the component
    const usernameInput = getByTestId("usernameInput"); // gets the input node

    fireEvent.change(usernameInput, {
      target: {
        value: "Juan",
      },
    });

    expect(usernameInput.value).toBe("Juan");
  });

  test("valid password", () => {
    const { getByTestId } = render(<App />); // renders the component
    const passwordInput = getByTestId("passwordInput"); // gets the input node

    fireEvent.change(passwordInput, {
      target: {
        value: "Password",
      },
    });
    expect(passwordInput.value).toBe("Password");
  });

  test("invalid userName && password", () => {
    const { getByTestId } = render(<App />); // renders the component
    const submitBtn = getByTestId("submitBtn"); // gets the input node

    fireEvent.click(submitBtn); // click submit btn

    const errorMsg = getByTestId("errorMsg"); // gets the error msg node

    expect(errorMsg.textContent).toBe("username & password can't be empty");
  });

  test("empty userName", () => {
    const { getByTestId } = render(<App />); // renders the component
    const submitBtn = getByTestId("submitBtn"); // gets the input node

    const passwordInput = getByTestId("passwordInput"); // gets the input node

    fireEvent.change(passwordInput, {
      target: {
        value: "Password",
      },
    });

    fireEvent.click(submitBtn); // click submit btn

    const errorMsg = getByTestId("errorMsg"); // gets the error msg node

    expect(errorMsg.textContent).toBe("username can't be empty");
  });

  test("invalid password", () => {
    const { getByTestId } = render(<App />); // renders the component
    const submitBtn = getByTestId("submitBtn"); // gets the input node

    const usernameInput = getByTestId("usernameInput"); // gets the input node

    fireEvent.change(usernameInput, {
      target: {
        value: "Juan",
      },
    });

    fireEvent.click(submitBtn); // click submit btn

    const errorMsg = getByTestId("errorMsg"); // gets the error msg node

    expect(errorMsg.textContent).toBe("password can't be empty");
  });
});
