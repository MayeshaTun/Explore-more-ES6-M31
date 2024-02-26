const instructors = [
  { name: "Nodi", age: 28, position: "Senior" },
  { name: "Akil", age: 26, position: "Junior" },
  { name: "Shobuj", age: 30, position: "Senior" },
];

const positionName = instructors.filter(
  (instructor) => instructor.position === "Senior"
);
const seniorInstructorName = positionName.map((instructor) => instructor.name);
console.log(seniorInstructorName);
