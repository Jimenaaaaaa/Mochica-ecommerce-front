import { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/product.js";
import { User } from "../models/user.js";
import { LoginData, State, usersReducer } from "./user.slice";

describe("Given the userSlice with payload and initial state mocked", () => {
  let mockInitialState: State;
  let mockLoginData: LoginData;

  beforeEach(() => {
    mockInitialState = {
      loggedUser: {
        token: null,
        user: {
          cart: [{}],
        } as User,
      },
      role: "user",
    };

    mockLoginData = {
      token: "test",
      user: {} as User,
    };
  });

  describe("When the login action is called", () => {
    test("Then, if the initial state userLogged values are empty, it should return the payload in the userLogged property of the state", () => {
      const mockLoginAction: PayloadAction<LoginData> = {
        type: "user/loginSlice",
        payload: mockLoginData,
      };
      const result = usersReducer(mockInitialState, mockLoginAction);
      expect(result).toEqual({
        loggedUser: mockLoginData,
        role: "user",
      });
    });
  });

  describe("When the add/to/cart action is called", () => {
    test("Then, if the initial state is an empty array, te cart should have an array with the payload and another object", () => {
      const mockAddToCartAction: PayloadAction<Product> = {
        type: "user/addToCartSlice",
        payload: {} as Product,
      };
      const result = usersReducer(mockInitialState, mockAddToCartAction);
      expect(result).toEqual({
        loggedUser: {
          token: null,
          user: {
            cart: [{}, {}],
          },
        },
        role: "user",
      });
    });
  });
});
