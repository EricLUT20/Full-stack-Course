const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const cors = require("cors")
const passport = require("passport")
const mongoose = require("mongoose")
const config = require("./config/database")

//Connecting to config.db
mongoose.connect(config.database)

//Connected databse
mongoose.connection.on("connected", () => {
  console.log("Connected to database " + config.database)
})

//Error database
mongoose.connection.on("error", (err) => {
  console.log("Database error: " + err)
})

//Init express
const app = express()

//Users
const users = require("./routes/users")

//Port
const port = process.env.PORT || 3000

app.use(cors())

//Set static folder
app.use(express.static(path.join(__dirname, "public")))

app.use(bodyParser.json())

//Initializing express-session middleware NOT NEEDED IF USING NODE V 12
app.use(
  require("express-session")({
    secret: config.secret,
    resave: false,
    saveUninitialized: false,
  })
)

// Initializing Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

require("./config/passport")(passport)

//Setting /users
app.use("/users", users)

app.get("/", (req, res) => {
  res.send("Invalid")
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"))
})

app.listen(port, () => {
  console.log("Server started on port " + port)
})
