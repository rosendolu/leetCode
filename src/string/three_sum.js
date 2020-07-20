/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//   先排序 再遍历 [i]
const threeSum = function (nums = []) {
	const res = [];
	const cacheSet = new Set();
	const len = nums.length;
	if (len < 3) return res;
	// 排序
	const tempArr = nums.sort((a, b) => a - b);
	console.log('sorted  arr', tempArr);
	let i = 0;
	let j = i + 1;
	let k = len - 1;
	// console.log(i, j, k);
	while (i < len && i < j && j < k) {
		let a = tempArr[i];
		let b = tempArr[j];
		let c = tempArr[k];
		console.log(i, j, k);
		let strEle = `${a}${b}${c}`;
		console.log(strEle, a + b + c);
		if (a + b + c === 0) {
			// 去重处理
			if (!cacheSet.has(strEle)) {
				res.push([a, b, c]);
				console.log(cacheSet);
				permutation([a, b, c]).forEach((el) => {
					cacheSet.add(el);
				});
			}
			j++;
		} else if (a + b + c > 0) {
			k--;
		} else {
			i++;
			j++;
		}
	}
	console.log(res);

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
	return res;
};
export { threeSum };
// 先存hash表，再遍历[i,j]
