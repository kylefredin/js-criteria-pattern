const test = require("ava");
const { IsOddCriteria } = require("../../src/criteria/IsOddCriteria");

test("should exist", (t) => {
  t.truthy(IsOddCriteria);
});

test("should return empty array", (t) => {
  const criteria = new IsOddCriteria();

  t.deepEqual(criteria.meetCriteria(), []);
});

test("should return correct values", (t) => {
  const criteria = new IsOddCriteria();

  t.deepEqual(criteria.meetCriteria([1, 2, 3, 4, 5, 6, 7, 8, 9]), [
    1,
    3,
    5,
    7,
    9,
  ]);
});
