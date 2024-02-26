/*filter selects elements based on a condition and returns an array with the element that fulfilled the condition*/

const numbers = [1, 5, 6, 4, 15];

const players = [75, 65, 67, 72, 55, 59];
//const selected = players.filter((p) => p > 70);
//const selected = players.filter((p) => p > 80);
//const selected = players.filter((p) => p > 50);
//const selected = players.filter((p) => p % 2 === 1);
const selected = players.filter((p) => p % 2 === 0);
//console.log(selected);

const friends = ["Mayesha", "Mizan", "Mone", "Moriom", "AbJolil"];

//const oddFriends = friends.filter((friend) => friend.length < 5);

const oddFriends = friends.filter((friend) => friend.length > 6);
console.log(oddFriends);
