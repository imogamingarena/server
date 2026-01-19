interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John",
  age: 30
};

console.log(`Hello, ${user.name}! You are ${user.age} years old.`);

// Example async function
const fetchData = async (): Promise<string> => {
  return "Data fetched";
};

fetchData().then(console.log);