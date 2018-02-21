
'use strict'

class DList {
	constructor() {
		this.length = 0;
		this.first = null;
		this.last = null;
	}

	push(data) {
		const prev = this.last;
		const element = { prev, data, next: null };

		if (this.length === 0)
			this.first = element;
		else
			this.last.next = element;
		this.last = element;
		this.length++;
		return (element);
	}

	pop() {
		const element = this.last;

		if (this.last)
			this.last = this.last.prev;
		if (this.length === 1)
			this.first = null;
		if (this.last)
			this.last.next = null;
		this.length -= (this.length === 0) ? 0 : 1;
		return ((element) ? element.data : null);
	}
	
	unshift(data) {
		const next = this.first;
		const element = { prev: null , data, next };
		
		console.log("\nlength: " + this.length + "\n");
		console.log(this.length === 0);

		if (this.length === 0)
			this.last = element;
		else
			this.first.prev = element;
		this.first = element;
		this.length++;
		return (element);
	}

	shift() {
		const element = this.first;

		if (this.first)
			this.first = this.first.next;
		if (this.length === 1)
			this.last = null;
		if (this.first)
			this.first.prev = null;
		this.length -= (this.length === 0) ? 0 : 1;
		return ((element) ? element.data : null);
	}

	insert(index, data) {
		let node = this.first;
		let element;

		if (index >= this.length)
			return (this.push(data));
		else if (index <= 0)
			return (this.unshift(data));
		while (node && index-- > 0)
			node = node.next;
		if (!node)
			node = this.last;
		element = { prev: node.prev, data, next: node };
		if (node.prev)
			node.prev.next = element;
		node.prev = element;
		if (!element.prev)
			this.first = element;
		if (!element.next)
			this.last = element;
	}
}

// Testing

const list = new DList();
const empty = new DList();

list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.unshift(-1);
list.unshift(-2);

console.log("\nList:");
console.dir(list, { depth: 6 });

//console.log("\nPoped elements:");
//console.dir(list.pop());
//console.dir(list.pop());
//console.log("\nShifted elements:");
//console.dir(list.shift());
//console.dir(list.shift());
//console.dir(list.pop());
list.insert(-100, "pisos0");
console.dir(list, { depth: 10 });
list.insert(0, "pisos1");
console.dir(list, { depth: 10 });
list.insert(100, "pisos2");
console.dir(list, { depth: 10 });
//
//console.log("\nList after:");
//console.dir(list, { depth: 10 });

//console.log("\n\n\n");
//
//console.log("\nList:");
//console.dir(empty, { depth: 4 });
//
//console.log("\nPoped element:");
//console.dir(empty.pop());
//
//console.log("\nList after pop():");
//console.dir(empty, { depth: 4 });
