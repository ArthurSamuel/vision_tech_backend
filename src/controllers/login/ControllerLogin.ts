import fs from "fs";
import { IUser } from "src/models/IUser";

class ControllerLogin {
  async asd() {
    console.log('object');
  }
  async doLogin(req: any, res: any) {
    const jwt = require("jsonwebtoken");
    const username: string = req.body.username;
    const password: string = req.body.password;
    if (username !== password) {
      res.status(401).send({
        message: "Credentials not match",
      });
      return;
    }
    let dataUsers: IUser[] = [];
    try {
      const data = fs.readFileSync("./user.txt", "utf-8");
      if (data) {
        const tempUser: IUser[] = JSON.parse(data);
        dataUsers = tempUser;
      }
    } catch (err) {
      console.error("No File");
    }
    const existOnRecord = dataUsers.some(
      (item) =>
        item.password === password &&
        item.username.toLowerCase() === username.toLowerCase()
    );
    if (!existOnRecord) {
      dataUsers.push({
        username,
        password,
      });
      try {
        fs.writeFile("./user.txt", JSON.stringify(dataUsers), (err) => {
          if (err) {
            console.error(err);
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
    const exp = Math.floor(Date.now() / 1000) + 60 * 60;
    const tokenJwt = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: exp,
    });
    res.status(200).send({
      token: tokenJwt,
    });
  }
}

export default ControllerLogin;
