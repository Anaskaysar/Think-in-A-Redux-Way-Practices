const array = [1, 2, 3, 4, 5];

console.log(
  array.reduce((previousReslt, currentValue) => {
    return previousReslt + currentValue;
  }, 0)
);
