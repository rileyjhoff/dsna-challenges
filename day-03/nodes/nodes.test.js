//CH-binary-node-add
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node.value < this.value) {
      if (this.left) {
        return this.left.add(node);
      } else {
        this.left = node;
      }
    }
    if (node.value >= this.value) {
      if (this.right) {
        return this.right.add(node);
      } else {
        this.right = node;
      }
    }
  }
}

test('binary node add', () => {
  const B = new BinaryTreeNode('B');
  const A = new BinaryTreeNode('A');
  const C = new BinaryTreeNode('C');
  const D = new BinaryTreeNode('D');
  B.add(A);
  B.add(D);
  B.add(C);
  expect(B.left.value).toEqual('A');
  expect(B.right.value).toEqual('D');
  expect(B.right.left.value).toEqual('C');
});

//CH-binary-node-find-person
class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node.value < this.value) {
      if (this.left) {
        return this.left.add(node);
      } else {
        this.left = node;
      }
    }
    if (node.value >= this.value) {
      if (this.right) {
        return this.right.add(node);
      } else {
        this.right = node;
      }
    }
  }

  findPerson(name) {
    if (name === this.value) {
      return this.person;
    }
    if (name < this.value) {
      if (this.left) {
        return this.left.findPerson(name);
      } else {
        return null;
      }
    }
    if (name > this.value) {
      if (this.right) {
        return this.right.findPerson(name);
      } else {
        return null;
      }
    }
  }
}

test('binary node find person', () => {
  const jones = new PersonTreeNode({
    name: 'Jones',
    phone: '123-4567',
    address: '123 Main St',
  });
  const brook = new PersonTreeNode({
    name: 'Brook',
    phone: '234-5678',
    address: '125 Main St',
  });
  const smith = new PersonTreeNode({
    name: 'Smith',
    phone: '345-6789',
    address: '127 Main St',
  });
  const nelson = new PersonTreeNode({
    name: 'Nelson',
    phone: '456-7890',
    address: '129 Main St',
  });
  const root = jones;
  root.add(brook);
  root.add(smith);
  root.add(nelson);
  expect(root.findPerson('Nelson')).toEqual({
    name: 'Nelson',
    phone: '456-7890',
    address: '129 Main St',
  });
  expect(root.findPerson('Foo')).toEqual(null);
  expect(root.findPerson('Smith')).toEqual({
    name: 'Smith',
    phone: '345-6789',
    address: '127 Main St',
  });
  expect(root.findPerson('Brook')).toEqual({
    name: 'Brook',
    phone: '234-5678',
    address: '125 Main St',
  });
  expect(root.findPerson('Jones')).toEqual({
    name: 'Jones',
    phone: '123-4567',
    address: '123 Main St',
  });
});

//CH-linked-list
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  add(node) {
    if (this.next) {
      return this.next.add(node);
    } else this.next = node;
  }

  getList(node) {
    if (this.next) {
      return this.value + ' ' + this.next.getList(node);
    } else return this.value;
  }

  remove(node) {
    if (!this.next) return;
    else if (node === this.next.value) {
      const addThisNode = this.next.next;
      this.next = null;
      return this.add(addThisNode);
    } else this.next.remove(node);
  }
}

test('linked list', () => {
  const root = new LinkedListNode('A');
  const nodeB = new LinkedListNode('B');
  root.add(nodeB);
  expect(root.getList()).toEqual('A B');
  const nodeC = new LinkedListNode('C');
  const nodeD = new LinkedListNode('D');
  const nodeE = new LinkedListNode('E');
  root.add(nodeC);
  root.add(nodeD);
  root.add(nodeE);
  expect(root.getList()).toEqual('A B C D E');
  root.remove('B');
  expect(root.getList()).toEqual('A C D E');
  root.remove('C');
  expect(root.getList()).toEqual('A D E');
  root.remove('D');
  expect(root.getList()).toEqual('A E');
  root.remove('E');
  expect(root.getList()).toEqual('A');
});

//CH-tree-nodes-traverse

class TreeNode {
  constructor({ value, children }) {
    this.value = value;
    this.children = children;
  }
}

function traverse(node, spaces = 0, str = '') {
  str += '\n' + ' '.repeat(spaces) + node.value;
  if (node.children.length > 0) {
    spaces += 2;
    for (const children of node.children) {
      str = traverse(children, spaces, str);
    }
  }
  return str;
}

test('tree node traverse', () => {
  const D = new TreeNode({
    value: 'D',
    children: [],
  });
  const B = new TreeNode({
    value: 'B',
    children: [D],
  });
  const C = new TreeNode({
    value: 'C',
    children: [],
  });
  const F = new TreeNode({
    value: 'F',
    children: [],
  });
  const E = new TreeNode({
    value: 'E',
    children: [F],
  });
  const A = new TreeNode({
    value: 'A',
    children: [B, C, E],
  });
  expect(traverse(A)).toBe('\nA\n  B\n    D\n  C\n  E\n    F');
});
