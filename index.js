const Person = require("./person")

const person1 = new Person("Lionel Messi", 37)

console.log(person1)

console.log("Hello from Node.js")

const Logger = require("./logger")

const logger = new Logger()

logger.on("message", (data) => console.log("Called Listener:", data))

logger.log("Hello World")
logger.log("Hi...")
logger.log("Hiii....")

const http = require("http")
const path = require("path")
const fs = require("fs")
const { error } = require("console")

const server = http.createServer((req, res) => {
  /*console.log(req.url)
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(content)
      }
    )
  }

  if (req.url === "/api/users") {
    const users = [
      { name: "Lionel Messi", age: 37 },
      { name: "Cristiano Ronaldo", age: 40 },
    ]
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(users))
  }*/

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  )
  //console.log(filePath)
  //res.end()

  let extname = path.extname(filePath)

  let contentType = "text/html"

  switch (extname) {
    case ".js":
      contentType = "text/javascript"
      break
    case ".css":
      contentType = "text/css"
      break
    case ".json":
      contentType = "application/json"
      break
    case ".png":
      contentType = "image/png"
      break
    case ".jpg":
      contentType = "image/jpg"
      break
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(content, "utf8")
          }
        )
      } else {
        res.writeHead(500)
        res.end(`Server Error: ${err.code}`)
        return
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType })
      res.end(content, "utf8")
    }
  })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
