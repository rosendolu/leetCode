/**
 * @param {*} arr
 *
 */

function selectionSort(arr = []) {
	const len = arr.length;
	let minIndex = null;
	for (let i = 0; i < len; i++) {
		minIndex = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		// swap
		if (minIndex !== i) {
			[arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
		}
	}
	console.log(arr);
	return arr;
}
export { selectionSort };
