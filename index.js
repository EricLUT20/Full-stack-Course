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
