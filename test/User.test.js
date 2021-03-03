const test = require("ava");
const { User } = require("../src/User");

test("should exist", (t) => {
  t.truthy(User);
});

test("should have empty first name by default", (t) => {
  const user = new User();

  t.is(user.firstName, "");
});

test("should have empty last name by default", (t) => {
  const user = new User();

  t.is(user.lastName, "");
});

test("should allow first name to be set in the constructor", (t) => {
  const user = new User({ firstName: "Test" });

  t.is(user.firstName, "Test");
});

test("should allow last name to be set in the constructor", (t) => {
  const user = new User({ lastName: "User" });

  t.is(user.lastName, "User");
});

test("should allow both first and last name to be set in the constructor", (t) => {
  const user = new User({ firstName: "Test", lastName: "User" });

  t.is(user.firstName, "Test");
  t.is(user.lastName, "User");
});
