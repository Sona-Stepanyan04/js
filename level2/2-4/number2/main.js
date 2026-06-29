//Given an object with keys and values, store the object's keys in the first array and the values in the second.
const person = {
    firstName: "John",
    lastName: "Doe"
};
let key = Object.keys(person);
let values = Object.values(person);
console.log(key);
console.log(values);
