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
var twoSum = function (nums = [], target) {
	if (!nums.length) return [];
	let map = {};
	for (let i = 0, len = nums.length; i < len; i++) {
		if (map[nums[i]] !== undefined) {
			return [map[(nums[i], i)]];
		} else {
			map[target - nums[i]] = i;
		}
	}
};
var twoSum2 = function (nums, target) {
	if (!nums.length) return [];
	let map = new Map();
	let index = 0;
	for (let i = 0, len = nums.length; i < len; i++) {
		index = map.get(nums[i]);
		if (index !== undefined) {
			return [index, i];
		}
		map.set(target - nums[i], i);
	}
};

export { twoSum, twoSum2 };
