class IsOddCriteria {
  /**
   * @param {number[]} numbers
   * @return {number[]}
   */
  meetCriteria(numbers = []) {
    return numbers.filter((num) => num % 2 !== 0);
  }
}

module.exports.IsOddCriteria = IsOddCriteria;
