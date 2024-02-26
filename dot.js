const person = {
  name: "Mayesha",
  job: "Rangpur",
  3: "third",
  "add-dress": "Parbatipur",
};
const prop = "job";
console.log(person.job); //option:1
console.log(person["job"]); //option:2
console.log(person[prop]); //option:3
console.log(person["3"]);
console.log(person["add-dress"]);
