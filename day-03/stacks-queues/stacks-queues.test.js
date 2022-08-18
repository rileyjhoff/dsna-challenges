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
