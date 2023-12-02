console.log(__dirname, __filename)

const person = {
  name: "Lionel Messi",
  age: 37,
}

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`)
  }
}

module.exports = Person
