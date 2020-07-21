function partition(arr = [], left, right) {
	//  取中间的为轴
	const len = arr.length;
	let pivot = arr[Math.floor((left + right) / 2)];
	// console.log('pivot', pivot);
	// 交换标志
	let flagSwap = true;
	while (left < right) {
		if (arr[left] > pivot) {
			flagSwap = true;
		} else {
			flagSwap = false;
			left++;
		}
		if (arr[right] < pivot) {
			flagSwap = true;
		} else {
			right--;
			flagSwap = false;
		}
		if (flagSwap) {
			[arr[left], arr[right]] = [arr[right], arr[left]];
			// break;
		}
	}
	// 交换 pivot 和leftIndex+1 位置
	if (left >= right) {
		[arr[left + 1], arr[len - 1]] = [arr[len - 1], arr[left + 1]];
	}
	console.log(arr);
	return left + 1;
}

function quickSort(arr = [], left, right) {
	console.log('raw source ', arr);
	if (left >= right) {
		return arr;
	}
	const pivot = partition(arr, left, right);
	console.log(pivot);
	// return quickSort(arr, 0, pivot - 1).concat(
	// 	quickSort(arr, pivot + 1, arr[arr.length - 1])
	// );
	// quickSort(0, pivot - 1, arr);
	// quickSort(0, pivot + 1, arr);
}

export { quickSort };
