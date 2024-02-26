const numbers = [12, 10, 8, 15, 7];
const doubled = numbers.map((n) => n * 2);
//console.log(doubled);

const fiveBonus = numbers.map((num) => num + 5);
//console.log(fiveBonus);

const halves = numbers.map((num) => num / 2);
//console.log(halves);

const friends = ["Mayesha", "Mizan", "Mone", "Moriom", "Ab Jolil"];
const lengths = friends.map((frn) => frn.length);
//console.log(lengths);

const friendsLetter = friends.map((frin) => frin[0]);
console.log(friendsLetter);
