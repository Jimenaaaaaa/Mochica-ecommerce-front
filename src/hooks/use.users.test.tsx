/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { User } from "../models/models/user";
import { UserRepo } from "../services/users.api.repo";

import { store } from "../store/store";
import { useUsers } from "./use.users";

describe("Given the useUsers Custom Hook, an ApiRepo and a given component", () => {
  let mockInfo: User;
  let mockRepo: UserRepo;

  beforeEach(async () => {
    mockInfo = {
      email: "test",
      password: "test",
    } as unknown as User;

    mockRepo = {
      loginUser: jest.fn(),
      registerUser: jest.fn(),
    } as unknown as UserRepo;

    const TestComponent = function () {
      const { register, login } = useUsers(mockRepo);
      return (
        <>
          <button onClick={() => register(mockInfo)}>register</button>
          <button onClick={() => login(mockInfo)}>login</button>
        </>
      );
    };
    await act(async () =>
      render(
        <Provider store={store}>
          <TestComponent></TestComponent>
        </Provider>
      )
    );
  });
  describe("When the TestComponent is rendered", () => {
    test("Then, the button should be in the document", async () => {
      const elements = await screen.findAllByRole("button");
      expect(elements[0]).toBeInTheDocument();
    });
  });
  describe("When the TestComponent is rendered and the register button is clicked", () => {
    test("Then, the userRegister function should be called", async () => {
      const elements = await screen.findAllByRole("button");
      await act(async () => userEvent.click(elements[0]));
      expect(mockRepo.registerUser).toHaveBeenCalled();
    });
  });
  describe("When the TestComponent is rendered and the login button is clicked", () => {
    test("Then, the loginUser function should be called", async () => {
      const elements = await screen.findAllByRole("button");
      await act(async () => userEvent.click(elements[1]));
      expect(mockRepo.loginUser).toHaveBeenCalled();
    });
  });
});
