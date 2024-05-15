// 3.1
function calCost(amount) {
  let transaction = 3;
  let interestRate = 0.001;
  let interest = amount * interestRate;
  let totalCost = amount + transaction + interest;

  return totalCost;
}

console.log(calCost(1200));

// 3.2

function greetingFriends(name1, name2, name3) {
  console.log(`Welcome ${name1}, ${name2}, ${name3}`);
}

greetingFriends("Mon", "Kill", "Biw");

// 3.2/2
const calculateAge = (birthYear) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return age;
};

console.log(calculateAge(1993), `year old.`);

// Exercise #3.2 Part 3
const greetFriendsWithAge = (
  name1,
  birthYear1,
  name2,
  birthYear2,
  name3,
  birthYear3
) => {
  const age1 = calculateAge(birthYear1);
  const age2 = calculateAge(birthYear2);
  const age3 = calculateAge(birthYear3);

  console.log(`Welcome ${name1}, you are ${age1} year old.`);
  console.log(`Welcome ${name2}, you are ${age2} year old.`);
  console.log(`Welcome ${name3}, you are ${age3} year old.`);
};

greetFriendsWithAge("Mon", 1993, "Biw", 1995, "Kill", 1990);
