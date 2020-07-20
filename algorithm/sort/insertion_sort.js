function insertionSort(arr = []) {
	const res = [];
	let curVal = null;
	for (let i = 1, len = arr.length; i < len; i++) {
		curVal = arr[i];
		for (let j = 0; j < i; j++) {
			if (arr[j] > curVal) {
				arr[j + 1] = arr[j];
			} else {
				break;
			}
		}
		//
	}
}

export { insertionSort };
