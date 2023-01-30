const eventEmmiter = require("events");
const event = new eventEmmiter();

module.exports = () => {
  event.on("shubham", () => {
    console.log("My name is Shubham Ghosh and Age is 29")
  })

  event.on("shubhamghosh", (sc, msg) => {
    console.log(`The pagestatus code is ${sc} and ${msg}`)
  })

  // event.emit("shubham");
  event.emit("shubhamghosh", 200, "Page is live");
}