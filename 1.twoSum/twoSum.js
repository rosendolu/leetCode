/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 */

/**
 *  遍历一遍hash 表
 *  O(n)
 */
var twoSum = function(nums, target) {
  if (!nums.length) return [];
  let map = new Map();
  let index = 0;
  for (let i = 0; i < nums.length; i += 1) {
    index = map.get(target - nums[i]);
    if (index !== undefined && index !== i) {
      return [index, i];
    }
    map.set(nums[i], i);
  }
};
//  multiple solutions  slowest bad
var twoSum0 = function(nums, target) {
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
//
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

// O(n) 遍历2遍hash 表
var twoSum4 = function(nums, target) {
  if (!nums.length) return [];
  let map = new Map(
    nums.map((item, index) => {
      return [item, index];
    })
  );
  let index = 0;
  for (let i = 0; i < nums.length; i += 1) {
    index = map.get(target - nums[i]);
    if (index !== undefined && index !== i) {
      return [index, i];
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
let arr = Array.from({ length: 10000000 }, (item, index) => index);

console.time('1');
twoSum(arr, 9);
console.timeEnd('1');
