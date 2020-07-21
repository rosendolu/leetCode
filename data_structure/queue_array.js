class Queue {
	constructor(...arr) {
		this.items = arr;
	}
	push(el) {
		return this.items.push(el);
	}
	shift() {
		return this.items.shift();
	}
	peek() {
		return this.items[0];
	}
	isEmpty() {
		return this.items.length === 0;
	}
	size() {
		return this.items.length;
	}
	clear() {
		return (this.items = []);
	}
	toString() {
		this.items.toString();
	}
}

export { Queue };
