const test = require("ava");
const { IsEvenCriteria } = require("../../src/criteria/IsEvenCriteria");

test("should exist", (t) => {
  t.truthy(IsEvenCriteria);
});

test("should return empty array", (t) => {
  const criteria = new IsEvenCriteria();

  t.deepEqual(criteria.meetCriteria(), []);
});

test("should return correct values", (t) => {
  const criteria = new IsEvenCriteria();

  t.deepEqual(criteria.meetCriteria([1, 2, 3, 4, 5, 6, 7, 8, 9]), [2, 4, 6, 8]);
});
