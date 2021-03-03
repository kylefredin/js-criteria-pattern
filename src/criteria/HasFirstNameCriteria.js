class HasFirstNameCriteria {
  /**
   * @param {Object[]} users
   * @return {Object[]}
   */
  meetCriteria(users = []) {
    return users.filter((user) => user.firstName.length > 0);
  }
}

module.exports.HasFirstNameCriteria = HasFirstNameCriteria;
