//  3 个元素的排列
function permutation(arr = []) {
	const len = arr.length;
	const set = new Set();
	let i = 0;
	while (i < len) {
		/**
		 * 0 1 2
		 * 1 0 2
		 * 2 0 1
		 */
		set.add(`${arr[i]}${arr[(i + 1) % 3]}${arr[(i + 2) % 3]}`);
		set.add(`${arr[i]}${arr[(i + 2) % 3]}${arr[(i + 1) % 3]}`);
		i++;
	}
	console.log(set);
	return Array.from(set);
}
export { permutation };
