class HasFirstNameCriteria {
  /**
   * @param {Object[]} users
   * @return {Object[]}
   */
  meetCriteria(users = []) {
    return users.filter(({ firstName = "" }) => firstName.length > 0);
  }
}

module.exports.HasFirstNameCriteria = HasFirstNameCriteria;
