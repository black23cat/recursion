console.log(fibs(8));
console.log(fibsRec(8));
console.log(`Eight number of fibonacci sequence is : ${fibonacciTerms(8)}`);

function fibs(n) {
  // immediately return when user enter value of n = 0/1
  if (n === 0) return [0];

  const sequence = [0, 1];
  if (n === 1) return sequence;

  // Loops until the i reach to given fibonacci number
  for (let i = 2; i <= n; i++) {
    // calculate the previous number in fibonacci sequence
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  // return the sequence of fibonacci number
  return sequence;
}

function fibonacciTerms(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciTerms(n - 1) + fibonacciTerms(n - 2);
}

function fibsRec(n) {
  // base case when the n is reached to 0/1
  if (n === 0) return [0];
  if (n < 2) return [0, 1];
  // Store Fibonacci sequence value and calculate
  // the current fibonacci number from previous value
  const fibonacciSequence = fibRec(n - 1);
  fibonacciSequence[n] =
    fibonacciSequence[fibonacciSequence.length - 1] +
    fibonacciSequence[fibonacciSequence.length - 2];
  // return the calculated value
  return fibonacciSequence;
}
