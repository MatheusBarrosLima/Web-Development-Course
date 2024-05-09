import { sqliteConnection } from "..";
import { tableUsers } from "./tableUsers";

export async function runMigrations() {
  const schemes = [tableUsers].join("");

  sqliteConnection()
    .then((db) => {
      db.exec(schemes);
    })
    .catch((error) => {
      console.error(error);
    });
}
