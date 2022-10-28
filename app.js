const express = require("express")
const app = express();
const ejs = require("ejs");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');


const userRoutes = require("./routes/users.routes")
const authRoutes = require("./routes/auther.routes")

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL ?? "http://127.0.0.1:3000",
      optionsSuccessStatus: 200,
    })
  );

app.get('/', (req, res) => {
    res.render("homepage")
})

app.use("/auth", authRoutes)
// app.use("/users", userRoutes )

app.listen(3000, () => {
    console.log(`server running on http://127.0.0.1:3000`
    );
})