class Queue {
	constructor() {
		this.count = 0;
		this.items = {};
	}
	push(element) {
		return (this.items[this.count++] = element);
	}
	shift() {
		if (this.isEmpty()) {
			return undefined;
		}

		const result = this.items[--this.count];
		delete this.items[this.count];
		return result;
	}
	peek() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items[0];
	}
	isEmpty() {
		return this.count === 0;
	}
	size() {
		return this.count;
	}
	clear() {
		this.items = {};
		this.count = 0;
		return this.items;
	}
	toString() {
		if (this.isEmpty()) {
			return '';
		}
		let objString = `${this.items[0]}`;
		for (let i = 1; i < this.count; i++) {
			objString = `${objString},${this.items[i]}`;
		}
		return objString;
	}
}

module.exports = { Queue };
