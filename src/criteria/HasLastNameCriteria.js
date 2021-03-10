class HasLastNameCriteria {
  /**
   * @param {Object[]} users
   * @return {Object[]}
   */
  meetCriteria(users = []) {
    return users.filter(({ lastName = "" }) => lastName.length > 0);
  }
}

module.exports.HasLastNameCriteria = HasLastNameCriteria;
