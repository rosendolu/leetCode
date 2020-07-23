class Stack {
	constructor(...arr) {
		this.item = arr;
	}
	push(el) {
		return this.item.push(el);
	}
	pop() {
		return this.item.pop();
	}
	peek() {
		return this.item[this.item.length - 1];
	}
	isEmpty() {
		return this.item.length === 0;
	}
	size() {
		return this.item.length;
	}
	clear() {
		return (this.item = []);
	}
	toString() {
		return this.item.toString();
	}
}

module.exports = { Stack };
