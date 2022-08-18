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
    return this.#list[this.#list.length - 1];
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
