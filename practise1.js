/*task-1: consol.log the secondary school location of Sophia*/
let data = {
  sophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "ABC primary school" },
          { location: "Peters burg" },
        ],
      },
      {
        secondary: [
          { school_name: "ABC secondary school" },
          { location: "st Lorence" },
        ],
      },
    ],
  },
};

console.log(data.sophia.study[1].secondary[1]);
