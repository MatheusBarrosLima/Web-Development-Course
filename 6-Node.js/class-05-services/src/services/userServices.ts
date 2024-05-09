import { randomUUID } from "node:crypto";
import { hash } from "bcrypt";
import { userRepository } from "../repositories/userRepository";

type UserData = {
  name: string;
  email: string;
  password: string;
};

export const userServices = {
  async create(data: UserData) {
    try {
      const { name, email, password } = data;

      const passwordHash = await hash(password, 10);

      const user = {
        id: randomUUID(),
        name,
        email,
        password: passwordHash,
      };

      const userCreated = await userRepository.create(user);


      return userCreated;
    } catch (error) {
      return console.error(error);
    }
  },

  async read (id: string) {
    try {
      const user = await userRepository.read(id);
      return user
    } catch (error) {
      console.error(error);
    }
  },
};
