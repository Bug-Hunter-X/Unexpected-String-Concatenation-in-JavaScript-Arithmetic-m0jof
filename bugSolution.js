function add(a, b) {
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return 'Invalid input';
  }
  return a + b; 
}

console.log(add(5, '5')); // Output: 10
console.log(add('abc',5)); // Output: Invalid input