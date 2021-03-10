const { HasFirstNameCriteria } = require("./criteria/HasFirstNameCriteria");
const { HasLastNameCriteria } = require("./criteria/HasLastNameCriteria");
const { AndCriteria } = require("./criteria/AndCriteria");
const { OrCriteria } = require("./criteria/OrCriteria");
const { IsEvenCriteria } = require("./criteria/IsEvenCriteria");
const { IsOddCriteria } = require("./criteria/IsOddCriteria");
const { User } = require("./User");

// create a user that has both first name and last name
const userWithBoth = new User({ firstName: "Test", lastName: "User" });

// create a user with only first name
const userOnlyFirst = new User({ firstName: "Test" });

// create a user with only last name
const userOnlyLast = new User({ lastName: "User" });

// create a user with no name
const userWithNeither = new User();

// create an array of all users
const allUsers = [userWithBoth, userOnlyFirst, userOnlyLast, userWithNeither];

console.log({ allUsers });

// determine which users in the array have a first name
const firstNameCriteria = new HasFirstNameCriteria();
const usersWithFirstName = firstNameCriteria.meetCriteria(allUsers);

console.log({ usersWithFirstName });

// determine which users in the array have a last name
const lastNameCriteria = new HasLastNameCriteria();
const usersWithLastName = lastNameCriteria.meetCriteria(allUsers);

console.log({ usersWithLastName });

// determine which users in the array have first AND last name
const bothCriteria = new AndCriteria([firstNameCriteria, lastNameCriteria]);
const usersWithBoth = bothCriteria.meetCriteria(allUsers);

console.log({ usersWithBoth });

// determine which users in the array have first OR last name
const eitherCriteria = new OrCriteria([firstNameCriteria, lastNameCriteria]);
const usersWithEither = eitherCriteria.meetCriteria(allUsers);

console.log({ usersWithEither });

const numbers = [1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const oddCriteria = new IsOddCriteria();
const oddNumbers = oddCriteria.meetCriteria(numbers);

console.log({ oddNumbers });

const evenCriteria = new IsEvenCriteria();
const evenNumbers = evenCriteria.meetCriteria(numbers);

console.log({ evenNumbers });

// The criteria pattern is interesting for strongly typed languages,
// but I am not sure if it is a suitable replacement to the standard
// array.filter method...
const hasFirstName = ({ firstName = "" }) => firstName.length > 0;
const hasLastName = ({ lastName = "" }) => lastName.length > 0;

const userzWithFirstName = allUsers.filter(hasFirstName);
const userzWithLastName = allUsers.filter(hasLastName);
const userzWithBoth = allUsers.filter(hasFirstName).filter(hasLastName);
const userzWithEither = allUsers.filter(
  (user) => hasFirstName(user) || hasLastName(user)
);

console.log({ userzWithFirstName });
console.log({ userzWithLastName });
console.log({ userzWithBoth });
console.log({ userzWithEither });
