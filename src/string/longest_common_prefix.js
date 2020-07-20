/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = (array) => {
	if (
		Object.prototype.toString.call(array) !== '[object Array]' ||
		array.length === 0
	) {
		return '';
	}
	if (array.length === 1) {
		return array.toString();
	}

	let prefix = '';

	for (let i = 0; i < array[0].length; i += 1) {
		prefix = array[0].substring(0, i + 1);

		const result = array.filter((item) => item.substring(0, i + 1) === prefix);

		if (result.length === array.length) {
			prefix = prefix.substring(0, i + 1);
		} else {
			prefix = prefix.substring(0, i);
			return prefix;
		}
	}
	return prefix;
};
exports.longestCommonPrefix = longestCommonPrefix;
