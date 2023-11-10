const concatOdds = require('./concatOdds');

// Unit tests for concatOdds function
test('Concatenating odd numbers from [1, 2, 3] and [4, 5, 6] should result in [1, 3, 5]', () => {
  expect(concatOdds([1, 2, 3], [4, 5, 6])).toEqual([1, 3, 5]);
});

// Test case: Concatenating odd numbers from two empty arrays should result in an empty array
test('Concatenating odd numbers from two empty arrays should result in an empty array', () => {
  expect(concatOdds([], [])).toEqual([]);
});

// Test case: Concatenating odd numbers from an empty array and a non-empty array should result in odd numbers from the non-empty array
test('Concatenating odd numbers from an empty array and a non-empty array should result in odd numbers from the non-empty array', () => {
  expect(concatOdds([], [2, 3, 4, 5])).toEqual([3, 5]);
});

// Test case: Concatenating odd numbers from a non-empty array and an empty array should result in odd numbers from the non-empty array
test('Concatenating odd numbers from a non-empty array and an empty array should result in odd numbers from the non-empty array', () => {
  expect(concatOdds([1, 2, 3], [])).toEqual([1, 3]);
});

// Test case: Concatenating odd numbers from arrays with no odd numbers should result in an empty array
test('Concatenating odd numbers from arrays with no odd numbers should result in an empty array', () => {
  expect(concatOdds([2, 4, 6], [8, 10, 12])).toEqual([]);
});

// Test case: Concatenating odd numbers from arrays with negative odd numbers should result in correct odd numbers
test('Concatenating odd numbers from arrays with negative odd numbers should result in correct odd numbers', () => {
  expect(concatOdds([-3, -2, -1], [-7, 0, 1])).toEqual([-3, -1, 1]);
});
