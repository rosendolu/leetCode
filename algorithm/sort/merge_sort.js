function mergeSort(arr = []) {
	if (arr.length <= 1) return arr;
	const middle = Math.floor(arr.length / 2);
	console.log('middle', middle);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);
	return merge(mergeSort(left), mergeSort(right));
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
	console.log(tempArr, left, right);
	return tempArr.concat(left, right);
}
export { mergeSort };
