import { prismaclient } from "../src/application/database";
import bcrypt from "bcrypt";

export class UserTest {
  static async delete() {
    await prismaclient.user.deleteMany({
      where: {
        username: "test",
      },
    });
  }
  static async create() {
    await prismaclient.user.create({
      data: {
        username: "test",
        name: "test",
        password: await bcrypt.hash("testtest", 10),
        token: "test",
      },
    });
  }
}
