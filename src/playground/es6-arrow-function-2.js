const add = (a, b) => {
  //   console.log(arguments);
  return a + b;
};
console.log(add(2, 3));

// const user = {
//   name: "Tanisha",
//   cities: ["rawatbhata", "dehradun", "kota"],
//   printPlacesLived: function() {
//     // console.log(this.name);
//     // console.log(this.cities);
//     const that = this;
//     this.cities.forEach(function(city) {
//       console.log(that.name + "has lived in  " + city);
//     });
//   }
// };
// user.printPlacesLived();
const user = {
  name: "Tanisha",
  cities: ["rawatbhata", "dehradun", "kota"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
    // return cityMessages;
    // console.log(this.name);
    // console.log(this.cities);
    //   const that = this;
    // this.cities.forEach(city => {
    //   console.log(this.name + "has lived in  " + city);
    // });
  }
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
