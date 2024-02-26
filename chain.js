//data access
const data = [{ id: 1, name: "abu", address: "Rangpur" }];
//console.log(data[0].address);

const products = {
  count: 5000,
  data: [
    { id: 1, name: "Asus VivoBook", price: "95000" },
    { id: 2, name: "macbook", price: "165000" },
  ],
};
//console.log(products.data[1].price);

const user = {
  id: 5001,
  name: "Mayesha",
  address: {
    street: {
      first: "54/1 uttor side",
      second: "GL-Roy Rode",
      third: "kamlkasna",
    },
    city: "Rangpur",
  },
};
console.log(user.address.street.second);

//optional chaining
const user2 = {
  id: 5002,
  name: "Morion Md.Ab Jolil",
  address: {
    city: "parbatipur",
    country: "Bangladesh",
  },
};
console.log(user.address.street?.second);
console.log(user2.address.street?.second);
