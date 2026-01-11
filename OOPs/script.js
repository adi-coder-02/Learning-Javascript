// Basic understanding of OOPs concepts in JavaScript

// Constructor function to create a Person object

function Person(name, age) {
    this.name = name;
    this.age = age;
}
// Method to display person's details
Person.prototype.displayDetails = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
// Creating instances of Person
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

// Displaying details of each person
person1.displayDetails(); // Output: Name: Alice, Age: 30
person2.displayDetails(); // Output: Name: Bob, Age: 25




