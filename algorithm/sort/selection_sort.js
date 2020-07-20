/**
 * @param {*} arr
 *
 */

function selectionSort(arr = []) {
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		let index_min = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[index_min]) {
				index_min = j;
			}
		}
		// swap
		if (index_min !== i) {
			[arr[index_min], arr[i]] = [arr[i], arr[index_min]];
		}
	}
	console.log(arr);
	return arr;
}
export { selectionSort };
