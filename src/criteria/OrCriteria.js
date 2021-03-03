class OrCriteria {
  /**
   * @type {Object[]}
   */
  criteria = [];

  /**
   * Or Criteria
   *
   * @constructor
   * @param {Object[]} criteria
   */
  constructor(criteria = []) {
    this.criteria = criteria;
  }

  /**
   * Determine which objects meet any of the criteria
   *
   * @param {Object[]} objects
   * @return {Object[]}
   */
  meetCriteria(objects = []) {
    const metCriteria = new Set();

    for (const criteria of this.criteria) {
      for (const obj of criteria.meetCriteria(objects)) {
        metCriteria.add(obj);
      }
    }

    return Array.from(metCriteria);
  }
}

module.exports.OrCriteria = OrCriteria;
