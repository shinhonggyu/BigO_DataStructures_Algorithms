// Drop Non Dominants⭐

function printAllNumbersThenAllPairSums(numbers) {
  console.log('these are the numbers');
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log('and these are their sums ');
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

// O(n + n^2)  =>  O(n^2)
// we care about the most terms

// O(x^2+3x+100+x/2)  =>  O(x^2)
// x가 5일경우 Dominant term is 100 이지만 big O worried about scale And as things go larger..
