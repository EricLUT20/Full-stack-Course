const express = require("express")
const path = require("path")
const logger = require("./middleware/logger")
const exphbs = require("express-handlebars")
const members = require("./members")

const app = express()

//Initialize middleware
//app.use(logger)

//Handlebars middleware
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Homepage
app.get("/", (req, res) => {
  res.render("index", {
    title: "Member App",
    members,
  })
})

app.use(express.static(path.join(__dirname, "public")))

//members API Router
app.use("/api/members", require("./routes/api/members"))

/*
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
  })
*/

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
