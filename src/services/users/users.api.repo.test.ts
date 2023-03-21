import { UserRepo } from "./users.api.repo";

describe("Given UserRepo class being instanced", () => {
  let mockRepoUsers: UserRepo;

  beforeEach(() => {
    mockRepoUsers = new UserRepo();
  });

  describe("When we call the login method", () => {
    test("If the response from fetch is ok, we should get the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ email: "test", password: "test" }),
      });
      const result = await mockRepoUsers.loginUser({
        email: "test",
        password: "test",
      });
      expect(result).toEqual({ email: "test", password: "test" });
    });

    test("If the response from fetch is not ok, we should get an error", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: "test status",
        statusText: "test statusText",
      });
      const result = mockRepoUsers.loginUser({
        email: "test",
        password: "test",
      });
      await expect(result).rejects.toThrow();
    });
  });

  describe("When we call the register method", () => {
    test("If the response from fetch is ok, we should get the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
          name: "test",
          lastName: "test",
          email: "test",
          password: "test",
        }),
      });
      await mockRepoUsers.registerUser({
        name: "test",
        lastName: "test",
        email: "test",
        password: "test",
      });
      expect(fetch).toHaveBeenCalled();
    });
  });

  test("If the response from fetch is not ok, we should get an error", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: "test status",
      statusText: "test statusText",
    });
    const result = mockRepoUsers.registerUser({
      name: "test",
      lastName: "test",
      email: "test",
      password: "test",
    });
    await expect(result).rejects.toThrow();
  });
});
