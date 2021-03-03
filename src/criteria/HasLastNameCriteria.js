class HasLastNameCriteria {
  /**
   * @param {Object[]} users
   * @return {Object[]}
   */
  meetCriteria(users = []) {
    return users.filter((user) => user.lastName.length > 0);
  }
}

module.exports.HasLastNameCriteria = HasLastNameCriteria;
