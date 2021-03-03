const test = require("ava");
const {
  HasLastNameCriteria,
} = require("../../src/criteria/HasLastNameCriteria");
const { User } = require("../../src/User");

test("should exist", (t) => {
  t.truthy(HasLastNameCriteria);
});

test("should return empty array", (t) => {
  const criteria = new HasLastNameCriteria();

  t.deepEqual(criteria.meetCriteria(), []);
});

test("should return correct users", (t) => {
  const userWithBoth = new User({ firstName: "Test", lastName: "User" });
  const userOnlyFirst = new User({ firstName: "Test" });
  const userOnlyLast = new User({ lastName: "User" });
  const userWithNeither = new User();

  const allUsers = [userWithBoth, userOnlyFirst, userOnlyLast, userWithNeither];

  const criteria = new HasLastNameCriteria();

  t.deepEqual(criteria.meetCriteria(allUsers), [userWithBoth, userOnlyLast]);
});
