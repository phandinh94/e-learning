const express = require("express")
const app = express();
const ejs = require("ejs");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

const userRoutes = require("./routes/users.routes")

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
app.use(morgan("dev"))


app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

app.get('/', (req, res) => {
    res.render("login")
})

app.get("users", userRoutes )

app.listen(3000, () => {
    console.log(`server running on http://127.0.0.1:3000`
    );
})