/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = (s) => {
	if (typeof s !== 'string' || s.length === 0) return 0;

	const len = s.length;
	let maxSubstring = s[0];
	let substr = maxSubstring;

	const maxLengthString = (a, b) => {
		let result = a;

		if (a.length < b.length) {
			result = b;
		}
		return result;
	};

	for (let i = 1; i <= len; i += 1) {
		if (substr.indexOf(s[i]) === -1) {
			substr += s.substring(i, i + 1);

			maxSubstring = maxLengthString(maxSubstring, substr);
		} else {
			substr = substr.substring(substr.indexOf(s[i]) + 1);
			substr += s[i];
			maxSubstring = maxLengthString(maxSubstring, substr);
		}
	}
	// console.log(maxSubstring);
	return maxSubstring.length;
};

exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
