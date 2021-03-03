class User {
  /**
   * The user's first name
   *
   * @type {string}
   */
  firstName = "";

  /**
   * The user's last name
   *
   * @type {string}
   */
  lastName = "";

  /**
   * Represents a human being
   *
   * @constructor
   * @param {Object} user
   * @param {string} user.firstName
   * @param {string} user.lastName
   */
  constructor({ firstName, lastName } = {}) {
    if (firstName) {
      this.firstName = firstName;
    }

    if (lastName) {
      this.lastName = lastName;
    }
  }
}

module.exports.User = User;
