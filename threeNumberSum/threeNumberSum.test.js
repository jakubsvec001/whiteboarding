const { threeNumberSum } = require('./threeNumberSum');

describe('edge case tests', () => {
  test('', () => {

  })
})

describe('base case tests', () => {
  test('1', () => {
    expect(threeNumberSum([1, 2, 3], 6)).toEqual([[1, 2, 3]]);
  })

  test('2', () => {
    expect(threeNumberSum([1, 2, 3], 7)).toEqual([]);
  })

  test('3', () => {
    expect(threeNumberSum([8, 10, -2, 49, 14], 57)).toEqual([[-2, 10, 49]]);
  })

  test('4', () => {
    expect(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).toEqual([
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5],
    ]);
  })

  test('5', () => {
    expect(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1], 0)).toEqual([
      [-8, 3, 5],
      [-6, 1, 5],
      [-1, 0, 1],
    ]);
  })

  test('6', () => {
    expect(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6], 0)).toEqual([
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 0, 6],
      [-6, 1, 5],
      [-1, 0, 1],
    ]);
  })

  test('7', () => {
    expect(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], 0)).toEqual([
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 0, 6],
      [-6, 1, 5],
      [-5, -1, 6],
      [-5, 0, 5],
      [-5, 2, 3],
      [-1, 0, 1],
    ]);
  })

  test('8', () => {
    expect(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)).toEqual([
      [1, 2, 15],
      [1, 8, 9],
      [2, 7, 9],
      [3, 6, 9],
      [3, 7, 8],
      [4, 5, 9],
      [4, 6, 8],
      [5, 6, 7],
    ]);
  })

  test('9', () => {
    expect(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 32)).toEqual([[8, 9, 15]]);
  })

  test('10', () => {
    expect(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 33)).toEqual([]);
  })

  test('11', () => {
    expect(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 5)).toEqual([]);
  })
})


