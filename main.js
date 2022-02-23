require("./api/helpers/string.helper");

const express = require("express");

const app = express();

const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true
  })
);

app.use(express.json());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const routers = require("./api/routers");
const auth = require("./api/middlewares/auth.middleware");
for (const route in routers) {
    const router = new routers[route]().router;
    app.use(`/${route}`, router, auth);
}

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
