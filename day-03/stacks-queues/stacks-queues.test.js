//CH-01-stack
class Stack {
  #list = [];

  constructor(initialValue) {
    if (initialValue) {
      this.#list = initialValue;
    }
  }

  push(item) {
    this.#list[this.#list.length] = item;
  }

  pop() {
    let itemOnTop;
    if (this.#list.length > 0) {
      itemOnTop = this.#list[this.#list.length - 1];
      this.#list.length = this.#list.length - 1;
    } else itemOnTop = null;
    return itemOnTop;
  }

  peek() {
    return this.#list.length > 0 ? this.#list[this.#list.length - 1] : null;
  }
}

test('stack', () => {
  const stack = new Stack();
  stack.push('fox');
  stack.push('goose');
  stack.push('lizard');
  expect(stack.pop()).toEqual('lizard');
  expect(stack.peek()).toEqual('goose');
  expect(stack.pop()).toEqual('goose');
  stack.push('llama');
  expect(stack.pop()).toEqual('llama');
  expect(stack.peek()).toEqual('fox');
  expect(stack.pop()).toEqual('fox');
  expect(stack.pop()).toEqual(null);
});

// CH-02-check-syntax
function checkSyntax(code) {
  const arr = code.replace(/ /g, '').split('');
  const parenthesis = new Stack();
  let length = 0;
  for (const item of arr) {
    if (item === '(' || item === ')' || item === '{' || item === '}') {
      parenthesis.push(item);
      length++;
    }
  }
  const expecting = new Stack();
  for (let i = 0; i < length; i++) {
    const topItem = parenthesis.pop();
    if (topItem === ')') {
      expecting.push('(');
    }
    if (topItem === '}') {
      expecting.push('{');
    }
    if (topItem === '(') {
      if (expecting.peek() !== '(') return false;
      else expecting.pop();
    }
    if (topItem === '{') {
      if (expecting.peek() !== '{') return false;
      else expecting.pop();
    }
  }
  return expecting.peek() === null ? true : false;
}

test('check syntax', () => {
  expect(checkSyntax(`if(true) { return; }`)).toBe(true);
  expect(checkSyntax(`if(true( { return; }`)).toBe(false);
  expect(checkSyntax(`if(true) { return;`)).toBe(false);
  expect(checkSyntax(`(if(true) { return; }`)).toBe(false);
  expect(checkSyntax(`( true && { name: 'foo' } )`)).toBe(true);
  expect(checkSyntax(`( true && { name: 'foo' ) )`)).toBe(false);
  expect(checkSyntax(`( true && ( name: 'foo' } )`)).toBe(false);
  expect(checkSyntax(`((2 + 3) * (4 + 11 * (2 - 1)))`)).toBe(true);
  expect(checkSyntax(`((2 + 3) * (4 + 11 * 2 - 1)))`)).toBe(false);
  expect(checkSyntax(`((2 + 3) * (4 + 11 * (2 - 1))`)).toBe(false);
});

// CH-03-reverse-array-with-stack
function reverseArray(arr) {
  const stack = new Stack();
  for (const item of arr) {
    stack.push(item);
  }
  const returnArr = [];
  while (stack.peek() !== null) {
    returnArr[returnArr.length] = stack.pop();
  }
  return returnArr;
}

test('reverse array with stack', () => {
  expect(reverseArray([12, 3, 5, 7])).toEqual([7, 5, 3, 12]);
});

// CH-04-queue
class Queue {
  #list = [];

  constructor(initialValue) {
    if (initialValue) {
      this.#list = initialValue;
    }
  }

  enqueue(item) {
    this.#list[this.#list.length] = item;
  }

  dequeue() {
    let itemUpNext, rest;
    if (this.#list.length > 0) {
      [itemUpNext, ...rest] = this.#list;
      this.#list = [...rest];
    } else itemUpNext = null;
    return itemUpNext;
  }

  hasNext() {
    if (this.#list.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}

test('queue', () => {
  const queue = new Queue();
  queue.enqueue('fox');
  queue.enqueue('goose');
  queue.enqueue('lizard');
  expect(queue.dequeue()).toEqual('fox');
  expect(queue.hasNext()).toEqual(true);
  expect(queue.dequeue()).toEqual('goose');
  queue.enqueue('llama');
  expect(queue.dequeue()).toEqual('lizard');
  expect(queue.hasNext()).toEqual(true);
  expect(queue.dequeue()).toEqual('llama');
  expect(queue.hasNext()).toEqual(false);
  expect(queue.dequeue()).toEqual(null);
});

// CH-05-O-1-dequeue
class QueueO1 {
  value;
  next;

  constructor(value) {
    this.value = value ? value : null;
    this.next = null;
  }

  enqueue(item) {
    if (this.next) {
      return this.next.enqueue(item);
    } else this.next = new QueueO1(item);
  }

  dequeue() {
    if (!this.next) return null;
    const dequeued = this.next.value;
    if (this.next.next) {
      this.next = this.next.next;
    } else this.next = null;
    return dequeued;
  }

  hasNext() {
    if (this.next) {
      return true;
    } else {
      return false;
    }
  }
}

test('O-1 dequeue', () => {
  const queue = new QueueO1();
  queue.enqueue('fox');
  queue.enqueue('goose');
  queue.enqueue('lizard');
  expect(queue.dequeue()).toEqual('fox');
  expect(queue.hasNext()).toEqual(true);
  expect(queue.dequeue()).toEqual('goose');
  queue.enqueue('llama');
  expect(queue.dequeue()).toEqual('lizard');
  expect(queue.hasNext()).toEqual(true);
  expect(queue.dequeue()).toEqual('llama');
  expect(queue.hasNext()).toEqual(false);
  expect(queue.dequeue()).toEqual(null);
});
