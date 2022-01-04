/** 1346 Check If N and Its Double Exist / easy
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    for (let j = 0; j < arr.length; j++) {
      const possibleValue = arr[j];
      if (possibleValue === 2 * currentValue && i !== j) {
        return true;
      }
    }
  }
  return false;
};
