const BST = require('./BstConstruction.js');

const test1 = new BST(10)
  .insert(5)
  .insert(15)
  .insert(5)
  .insert(2)
  .insert(14)
  .insert(22);

const test2 = new BST(10).insert(15).insert(11).insert(22).remove(10);

const test3 = new BST(10).insert(5).insert(7).insert(2).remove(10);

const test4 = new BST(10)
  .insert(5)
  .insert(15)
  .insert(22)
  .insert(17)
  .insert(34)
  .insert(7)
  .insert(2)
  .insert(5)
  .insert(1)
  .insert(35)
  .insert(27)
  .insert(16)
  .insert(30)
  .remove(22)
  .remove(17);

const test5 = new BST(10).insert(15).insert(11).insert(22).insert(5).insert(7).insert(2).remove(10);

const test6 = new BST(10).remove(10)


function inOrderTraverse(tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

describe('base cases', () => {
  it('Test Case #1', function () {
    expect(test1.left.value).toEqual(5);
  });

  it('Test Case #2', function () {
    expect(test1.right.right.value).toEqual(22);
  });

  it('Test Case #3', function () {
    expect(test1.right.left.value).toEqual(14);
  });

  it('Test Case #4', function () {
    expect(test1.left.right.value).toEqual(5);
  });

  it('Test Case #5', function () {
    expect(test1.left.left.value).toEqual(2);
  });

  it('Test Case #6', function () {
    expect(test1.left.left.left).toEqual(null);
  });

  it('Test Case #7', function () {
    expect(test1.right.left.right).toEqual(null);
  });

  it('Test Case #8', function () {
    expect(test1.contains(15)).toEqual(true);
  });

  it('Test Case #9', function () {
    expect(test1.contains(2)).toEqual(true);
  });

  it('Test Case #10', function () {
    expect(test1.contains(5)).toEqual(true);
  });

  it('Test Case #11', function () {
    expect(test1.contains(10)).toEqual(true);
  });

  it('Test Case #12', function () {
    expect(test1.contains(22)).toEqual(true);
  });

  it('Test Case #13', function () {
    expect(test1.contains(23)).toEqual(false);
  });

  it('Test Case #14', function () {
    expect(inOrderTraverse(test2, [])).toEqual([11, 15, 22]);
  });

  it('Test Case #15', function () {
    expect(inOrderTraverse(test3, [])).toEqual([2, 5, 7]);
  });

  it('Test Case #16', function () {
    expect(inOrderTraverse(test4, [])).toEqual([
      1,
      2,
      5,
      5,
      7,
      10,
      15,
      16,
      27,
      30,
      34,
      35,
    ]);
  });

  it('Test Case #17', function () {
    expect(test4.right.right.value).toEqual(27);
  });

  it('Test Case #18', function () {
    expect(test4.right.right.left.value).toEqual(16);
  });
});
