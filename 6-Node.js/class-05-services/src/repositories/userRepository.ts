import { sqliteConnection } from "../databases/sqlite3";

type UserDataCreate = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export const userRepository = {
  async create({ id, name, email, password }: UserDataCreate) {
    const db = await sqliteConnection();

    const querySQL = "INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?);";

    await db.run(querySQL, [id, name, email, password]);

    return { status: 201, id };
  },

  async read(id:string) {
    const db = await sqliteConnection();
    const querySQL = "SELECT * FROM users WHERE id = ?"
    return db.get(querySQL, [id])
  }
};
