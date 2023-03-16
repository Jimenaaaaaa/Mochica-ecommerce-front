import {
  LoginData,
  ProtoUser,
  RegisterData,
  User,
} from "../models/models/user";

// Tengo que seguir rellenando el repo con el resto de metodos.

export interface UsersApiRepoStructure {
  loadUser(): Promise<User>;
  loginUser(user: LoginData): Promise<LoginData>;
  registerUser(user: ProtoUser): Promise<User>; // Tb se puede llamar REGISTER
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
    return data; //Devuelve un objeto con el token
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
    return data; //Devuelve un objeto con el token
  }
}
