const http = require("http")

http
  .createServer((req, res) => {
    res.write("Hello world")
    res.end()
  })
  .listen(5000, () => console.log("Server running on port 5000"))
