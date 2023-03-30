import { LoginData, ProtoUser, RegisterData, User } from "../../models/user";

export interface UserRepoStructure {
  loadUser(): Promise<User>;
  loginUser(user: LoginData): Promise<LoginData>;
  registerUser(user: ProtoUser): Promise<User>;
}

export class UserRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/users";
  }

  async loginUser(user: LoginData) {
    const url = this.url + "/login";
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();
    return data;
  }

  async registerUser(user: RegisterData) {
    const url = this.url + "/register";
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();
    return data.results;
  }
}
