/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums = []) {
	let ret = 1;
	if (nums.length <= 0) return 0;
	if (nums.length === 1) return ret;
	for (let i = 0, len = nums.length; i < len; i++) {
		let max = 1;
		for (let j = i; j < len - 1; j++) {
			if (nums[j] >= nums[j + 1]) break;
			max++;
		}
		console.log(max);
		ret = Math.max(ret, max);
	}
	return ret;
};
module.exports = {
	findLengthOfLCIS,
};
