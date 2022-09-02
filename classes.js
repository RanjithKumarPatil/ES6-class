class Human {
  constructor() {
    this.gender = "Male";
  }
  printGender() {
    console.log(this.gender);
  }
}
class Person extends Human {
  constructor() {
    super();
    this.name = "Ranjith";
    // this.gender = "female";
  }
  printMyName() {
    console.log(this.name);
  }
}
const person = new Person();
person.printMyName();
// const human = new Human();
// human.printGender();
person.printGender();
