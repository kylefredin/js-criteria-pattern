class AndCriteria {
  /**
   * @type {Object[]}
   */
  criteria = [];

  /**
   * And Criteria
   *
   * @constructor
   * @param {Object[]} criteria
   */
  constructor(criteria = []) {
    this.criteria = criteria;
  }

  /**
   * Determine which objects meet all of the criteria
   *
   * @constructor
   * @param {Object[]} objects
   * @return {Object[]}
   */
  meetCriteria(objects = []) {
    // if criteria or object list is empty, return early
    if (this.criteria.length === 0 || objects.length === 0) {
      return [];
    }

    // bucket to contain all of the objects that met the criteria
    // we use a set to ensure we do not have any duplicates
    const metCriteria = new Set();

    // a map of criteria to objects that met the criteria
    const criteriaMap = new Map();

    // build up the criteria map
    for (const criteria of this.criteria) {
      criteriaMap.set(criteria, criteria.meetCriteria(objects));
    }

    // loop over each object to determine if they met all criteria
    for (const obj of objects) {
      // bucket to contain all results for the object
      const results = [];

      // loop over each result set and check if obj met the criteria
      for (const criteriaResults of criteriaMap.values()) {
        results.push(criteriaResults.includes(obj));
      }

      // if the results array does not include false, it met all criteria
      if (!results.includes(false)) {
        metCriteria.add(obj);
      }
    }

    // convert the set back to an array
    return Array.from(metCriteria);
  }
}

module.exports.AndCriteria = AndCriteria;
