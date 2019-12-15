/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 */
// O(n) bad
//  multiple solutions
var twoSum = function(nums, target) {
  if (!nums.length) return [];

  let result = nums.reduce((acc, item, index, arr) => {
    let subIndex = arr.indexOf(target - item);
    if (subIndex !== -1 && subIndex !== index) {
      acc.push([index, subIndex]);
    }
    return acc;
  }, []);
  return result[0];
};
// O(n)
// one solutions
var twoSum1 = function(nums, target) {
  if (!nums.length) return [];
  for (let i = 0; i < nums.length; i += 1) {
    let subIndex = nums.indexOf(target - nums[i]);
    if (subIndex !== -1 && subIndex !== i) {
      return [i, subIndex];
    }
  }
};
// O(n^2)
var twoSum2 = function(nums, target) {
  if (!nums.length) return [];
  for (let i = 0; i < nums.length; i += 1) {
    let a = target - nums[i];
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] === a) {
        return [i, j];
      }
    }
  }
};
// O(n)
var twoSum3 = function(nums, target) {
  if (!nums.length) return [];
  let map = new Map();
  let index = 0;
  for (let i = 0; i < nums.length; i += 1) {
    map.set(nums[i], i);
    index = map.get(target - nums[i]);
    if (index !== undefined && index !== i) {
      return [Math.min(i, index), Math.max(i, index)];
    }
  }
};

/**
 *
 * Example
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 *
 *
 */
let arr = Array.from({ length: 10 ** 5 }, (item, index) => index);

console.time('1');
twoSum(arr, 9);
console.timeEnd('1');

console.time('2');
twoSum1(arr, 9);
console.timeEnd('2');

console.time('3');
twoSum2(arr, 9);
console.timeEnd('3');
