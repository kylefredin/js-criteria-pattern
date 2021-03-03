const test = require("ava");
const {
  HasFirstNameCriteria,
} = require("../../src/criteria/HasFirstNameCriteria");
const { User } = require("../../src/User");

test("should exist", (t) => {
  t.truthy(HasFirstNameCriteria);
});

test("should return empty array", (t) => {
  const criteria = new HasFirstNameCriteria();

  t.deepEqual(criteria.meetCriteria(), []);
});

test("should return correct users", (t) => {
  const userWithBoth = new User({ firstName: "Test", lastName: "User" });
  const userOnlyFirst = new User({ firstName: "Test" });
  const userOnlyLast = new User({ lastName: "User" });
  const userWithNeither = new User();

  const allUsers = [userWithBoth, userOnlyFirst, userOnlyLast, userWithNeither];

  const criteria = new HasFirstNameCriteria();

  t.deepEqual(criteria.meetCriteria(allUsers), [userWithBoth, userOnlyFirst]);
});
