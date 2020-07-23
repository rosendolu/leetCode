const { log } = console;
// 快速选择第 K 大元素
function quickSelect(arr = [], k = 0) {
	// 边界处理
	if (arr.length < k) return null;
	log(arr, k);
	return search(arr, 0, arr.length - 1, k);
}
function search(arr = [], i, j, k) {
	if (j - i <= 0) return arr[i];
	// 分区
	const index = partition(arr, i, j);
	log('index', index);
	if (k === index + 1) return arr[index];
	if (k > index + 1) {
		return search(arr, index + 1, j, k);
	} else {
		return search(arr, i, index - 1, k);
	}
}
function partition(arr, i, j) {
	const pivot = arr[Math.floor((i + j) / 2)];
	while (i < j) {
		while (arr[i] < pivot) {
			i++;
		}
		while (arr[j] > pivot) {
			j--;
		}
		if (arr[i] !== arr[j]) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		j--;
	}
	return i;
}
module.exports = { quickSelect };
