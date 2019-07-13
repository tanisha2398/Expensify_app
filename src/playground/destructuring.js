// console.log("destructuring");
// const person = {
//   name: "Tanisha",
//   age: 21,
//   location: {
//     city: "kota",
//     temperature: 20
//   }
// };

// const { name: firstName = "anonymous", age } = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${firstName} is ${age}`);
// const { city, temperature: temp } = person.location;
// if (city && temp) {
//   console.log(`${temp} in ${city}`);
// }
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };
// const { name: publisherName = "Self published" } = book.publisher;
// console.log(publisherName);

//array destructuring

// const address = ["type-3/56-J", "Rawatbhata", "Rajasthan", "323307"];

// const [, city, state] = address;

// console.log(`you are in ${city} ${state}`);

const item = ["Coffee(hot)", "$2.00", "$2.50", "$2.76"];

const [coffee, , mCost] = item;
console.log(`A medium ${coffee} costs ${mCost}`);
