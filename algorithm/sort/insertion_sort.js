function insertionSort(arr = []) {
	let tempVal = null;
	let tempIndex = null;
	for (let i = 1, len = arr.length; i < len; i++) {
		tempVal = arr[i];
		tempIndex = i;
		for (let j = i - 1; j >= 0; j--) {
			console.log('i,j', i, j, arr[i], arr[j]);
			if (tempVal < arr[j]) {
				arr[j + 1] = arr[j];
				tempIndex = j;
			} else {
				break;
			}
		}
		arr[tempIndex] = tempVal;
	}
	console.log(arr);
	return arr;
}

module.exports = { insertionSort };
