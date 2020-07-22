function mergeSort(arr = []) {
	if (arr.length <= 1) return arr;
	const middle = Math.floor(arr.length / 2);
	console.log('middle', middle);
	return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}

function merge(left = [], right = []) {
	const tempArr = [];

	while (left.length > 0 && right.length > 0) {
		if (left[0] < right[0]) {
			tempArr.push(left.shift());
		} else {
			tempArr.push(right.shift());
		}
	}
	return tempArr.concat(left, right);
}
export { mergeSort };
