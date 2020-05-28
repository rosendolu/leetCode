const chalk = require('chalk');
const { checkInclusion2 } = require('./src/string/checkInclusion');

// eslint-disable-next-line no-unused-vars
const { log, time, timeEnd } = console;
log(chalk.bgGreen(checkInclusion2('adc', 'dcda')));

function sort(arr = []) {
	return arr.filter((item) => item > 100);
}
sort([100, 200, 201]);
