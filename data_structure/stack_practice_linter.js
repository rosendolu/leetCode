import { Stack } from './stack_array.js';
const { log } = console;
//  () {} []  匹配检查
class Linter {
	constructor(str = '') {
		this.source = str;
		this.stack = new Stack();
	}
	test() {
		for (let i = 0, len = this.source.length; i < len; i++) {
			let key = this.source.charAt(i);
			let before;
			switch (key) {
				case '(':
				case '[':
				case '{':
					this.stack.push(key);
					break;
				case ')':
					before = this.stack.pop();
					if (before !== '(') {
						log('Unmatched ', key, 'index', i);
						return false;
					}
					break;
				case ']':
					before = this.stack.pop();
					if (before !== '[') {
						log('Unmatched ', key, 'index', i);
						return false;
					}
					break;
				case '}':
					before = this.stack.pop();
					if (before !== '{') {
						log('Unmatched ', key, 'index', i);
						return false;
					}
					break;
			}
		}

		return true;
	}
}

const linter = new Linter('var a = [1,{b:1,}}]');

log(linter.test());
module.exports = { Linter };
