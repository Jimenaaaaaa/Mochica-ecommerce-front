import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/models/user";
import { LoginData, State, usersReducer } from "./user.slice";

describe("Given the userSlice with payload and initial state mocked", () => {
  let mockInitialState: State;
  let mockLoginData: LoginData;

  beforeEach(() => {
    mockInitialState = {
      loggedUser: {
        token: null,
        user: {},
      },
      role: "user",
    };

    mockLoginData = {
      token: "test",
      user: {} as User,
    };
  });

  describe("When the login action is called", () => {
    test("Then, if the initial state userLogged is empty, it should return the payload in the userLogged property of the state", () => {
      const mockLoginAction: PayloadAction<LoginData> = {
        type: "user",
        payload: mockLoginData,
      };
      const result = usersReducer(mockInitialState, mockLoginAction);
      expect(result).toEqual({
        loggedUser: mockLoginData,
        users: {},
      });
    });
  });
});
