/*task-2: console.log output:Petersburg, Herry */

let student = {
  2222: {
    name: "Jack",
    section: "C",
    class: "IX",
    address: {
      "building no": 12,
      street: "St.Jonson",
      city: "Petersburg",
      country: "Uk",
    },
  },

  3333: {
    name: "Herry",
    section: "D",
    class: "X",
    address: {
      "building no": 85,
      street: "DC road",
      city: "Kachukhet",
      country: "Bangladesh",
    },
  },
};
console.log(student[2222].address.city);
console.log(student[3333].name);
