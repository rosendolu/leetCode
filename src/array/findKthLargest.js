/**
 * 数组中的第K个最大元素
 * @param {number []} nums
 * @param {number} k
 */
var findKthLargest = function (nums = [], k) {
	if (nums.length < k || k < 1) return null;
	console.log('k', nums.length + 1 - k);
	return bfs(nums, 0, nums.length - 1, nums.length + 1 - k);
};
function bfs(nums = [], i, j, k) {
	if (j - i <= 0) return nums[i];
	const index = partition(nums, i, j);
	if (k === index + 1) return nums[index];
	if (k > index + 1) {
		return bfs(nums, index + 1, j, k);
	} else {
		return bfs(nums, i, index - 1, k);
	}
}
function partition(nums = [], i, j) {
	const pivot = nums[Math.floor((i + j) / 2)];
	console.log('pivot', pivot);
	while (i < j) {
		while (nums[i] < pivot) {
			i++;
		}
		while (nums[j] > pivot) {
			j--;
		}
		if (nums[i] !== nums[j]) {
			[nums[i], nums[j]] = [nums[j], nums[i]];
		}
		j--;
	}
	console.log('i', i);
	return i;
}
module.exports = {
	findKthLargest,
};
