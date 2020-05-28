const { log } = console;
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	function isPermutation(s, map) {
		for (const char of s) {
			if (!map.has(char)) return false;

			const count = map.get(char);

			if (count === 1) {
				map.delete(char);
			} else {
				map.set(char, count - 1);
			}
		}

		return map.size === 0;
	}

	// short-ciruit
	if (s2.length < s1.length) return false;

	// count chars of s1
	const chars = new Map();
	for (const char of s1) {
		chars.set(char, chars.get(char) + 1 || 1);
	}

	for (let i = 0; i < s2.length; i += 1) {
		if (chars.has(s2[i])) {
			const clone = new Map(chars);
			if (isPermutation(s2.substring(i, i + s1.length), clone)) {
				return true;
			}
		}
	}

	return false;
};
var checkInclusion2 = (s1, s2) => {
	const calcDis = (arr = []) => {
		const max = Math.max(...arr);
		const min = Math.min(...arr);
		return max - min;
	};

	if (s2.length < s1.length) return false;
	let permutation = [];
	let cloneS2 = s2;
	for (let i = 0; i < s1.length; ++i) {
		const index = cloneS2.indexOf(s1[i]);

		if (index !== -1) {
			permutation.push(index);
			log(permutation);
			cloneS2 = cloneS2.replace(s1[i], '');

			if (permutation.length === s1.length) {
				log(calcDis(permutation));
				return calcDis(permutation) === s1.length - 1;
			}

			continue;
		}
		return false;
	}
};
module.exports = {
	checkInclusion,
	checkInclusion2,
};
