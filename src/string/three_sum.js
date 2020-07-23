/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 */

function threeSum(nums = []) {
	let res = [];
	nums.sort((a, b) => a - b);
	let len = nums.length;
	if (nums[0] <= 0 && nums[len - 1] >= 0) {
		let i = 0;
		while (i < len - 2) {
			if (nums[i] > 0) break; // 最左侧大于0，无解
			let first = i + 1;
			let last = len - 1;
			while (first < last) {
				if (nums[i] * nums[last] > 0) break; // 三数同符号，无解
				let sum = nums[i] + nums[first] + nums[last];
				if (sum === 0) {
					res.push([nums[i], nums[first], nums[last]]);
				}
				// first右移
				if (sum <= 0) {
					while (nums[first] === nums[++first]) {
						console.log('duplicate value', nums[i]);
					} // 重复值跳过
					// last 左移
				} else {
					while (nums[last] === nums[--last]) {
						console.log('duplicate value', nums[i]);
					} // 重复值跳过
				}
			}
			while (nums[i] === nums[++i]) {
				console.log('duplicate value', nums[i]);
			}
		}
	}
	console.log(res);
	return res;
}
function threeSum2(nums = []) {
	const len = nums.length;
	const res = [];
	if (len < 3) return res;
	// 存hash 表
	let map = {};
	for (let i = 0, len = nums.length; i < len - 2; i++) {
		for (let j = i + 1; j < len - 1; j++) {
			if (map[nums[j]] !== undefined) {
				res.push([nums[j]].concat(map[nums[i]]));
				delete map[nums[j]];
			} else {
				map[0 - nums[i] - nums[j]] = [nums[i], nums[j]];
			}
		}
	}
	console.log(res);
	return res;
}
module.exports = { threeSum, threeSum2 };
