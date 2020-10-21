function removeAnagrams(list) {

}

test('removes anagrams', () => {
  expect(removeAnagrams(['act', 'cat'])).toEqual([]);
})

test('retains non-anagrams', () => {
  expect(removeAnagrams(['act', 'cat', 'smith'])).toEqual(['smith']);
})

test('passes tricky test', () => {
  expect(removeAnagrams([
    'abcdefghijklmnopqrstuvwxyz',
    'abcdefghijkzlmnopqrstuvwxy',
    'abcdefghiijkllmnopqrstuvwxyz'
  ])).toEqual(['abcdefghiijkllmnopqrstuvwxyz']);
})
