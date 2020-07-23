const { log } = console;
function partition(arr = [], i, j) {
	let pivot = arr[Math.floor((i + j) / 2)];
	console.log('first pivot', pivot);
	while (i < j) {
		console.log('i,j', i, j);
		while (arr[i] < pivot) {
			i++;
		}
		while (arr[j] > pivot) {
			j--;
		}
		// swap left with right
		if (i < j) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		i++;
		j--;
	}
	return i;
}

function quickSort(arr = [], i, j) {
	// length === 1
	if (j - i <= 0) return arr;

	const index = partition(arr, i, j);
	log('pivot index', index);
	// length > 1;
	if (i < index - 1) {
		quickSort(arr, i, index - 1);
	}
	// length > 1;
	if (index < j) {
		quickSort(arr, index, j);
	}
	console.log(arr);
	return arr;
}

module.exports = { quickSort };
