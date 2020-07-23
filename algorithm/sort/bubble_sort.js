/**
 * @param {*} arr
 */
function bubbleSort(arr = []) {
	const len = arr.length;
	let doneFlag = true;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			// swap
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				doneFlag = false;
			}
		}
		//  一轮当中没有交换的 => 结束
		if (doneFlag) {
			break;
		}
	}
	console.log(arr);
	return arr;
}

module.exports = { bubbleSort };
