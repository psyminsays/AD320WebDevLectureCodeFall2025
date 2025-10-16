//function being tested
function sorter(arr, value) {
  const result = [];
  let inserted = false;

  for (let i = 0; i < arr.length; i++) {
    if (!inserted && value < arr[i]) {
      result.push(value);
      inserted = true;
    }
    result.push(arr[i]);
  }

  if (!inserted) result.push(value);
  return result;
}

//Function is not being tested
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

module.exports = { sorter, isSorted };
