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
