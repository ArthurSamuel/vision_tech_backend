const app = require("./app");
require("dotenv").config();

const start = (port:any) => {
  try {
    app.listen(port, () => {
      console.log(`Api running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

start(process.env.PORT);