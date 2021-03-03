const test = require("ava");
const { AndCriteria } = require("../../src/criteria/AndCriteria");
const {
  HasFirstNameCriteria,
} = require("../../src/criteria/HasFirstNameCriteria");
const {
  HasLastNameCriteria,
} = require("../../src/criteria/HasLastNameCriteria");
const { IsEvenCriteria } = require("../../src/criteria/IsEvenCriteria");
const { IsOddCriteria } = require("../../src/criteria/IsOddCriteria");
const { User } = require("../../src/User");

test("should exist", (t) => {
  t.truthy(AndCriteria);
});

test("should work with no criteria", (t) => {
  const criteria = new AndCriteria();

  t.deepEqual(criteria.meetCriteria([1, 2, 3, 4, 5]), []);
});

test("should work with a single criteria but no objects", (t) => {
  const criteria = new AndCriteria([new IsOddCriteria()]);

  t.deepEqual(criteria.meetCriteria(), []);
});

test("should work with a single criteria", (t) => {
  const criteria = new AndCriteria([new IsOddCriteria()]);

  t.deepEqual(criteria.meetCriteria([1, 2, 3, 4, 5]), [1, 3, 5]);
});

test("should work with a multiple criteria [numbers]", (t) => {
  const criteria = new AndCriteria([new IsOddCriteria(), new IsEvenCriteria()]);

  t.deepEqual(criteria.meetCriteria([1, 2, 3, 4, 5]), []);
});

test("should work with a multiple criteria [objects]", (t) => {
  const userWithBoth = new User({ firstName: "Test", lastName: "User" });
  const userOnlyFirst = new User({ firstName: "Test" });
  const userOnlyLast = new User({ lastName: "User" });
  const userWithNeither = new User();

  const criteria = new AndCriteria([
    new HasFirstNameCriteria(),
    new HasLastNameCriteria(),
  ]);

  const allUsers = [userWithBoth, userOnlyFirst, userOnlyLast, userWithNeither];

  t.deepEqual(criteria.meetCriteria(allUsers), [userWithBoth]);
});
