const products = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 2, name: "Asus", price: 55000 },
  { id: 3, name: "dell", price: 45000 },
  { id: 4, name: "mac", price: 150000 },
];

/*map*/
const name = products.map((product) => product.name);
//console.log(name);
const price = products.map((p) => p.price);
//console.log(price);
const id = products.map((i) => i.id);
//console.log(id);

/*filter*/
const expensive = products.filter((p) => p.price > 50000);
//console.log(expensive);

/*find*/
const affordable = products.find((p) => p.price < 50000);
//console.log(affordable);

/*reduce*/
const total = products.reduce((acum, current) => acum + current.price, 0);
console.log(total);
