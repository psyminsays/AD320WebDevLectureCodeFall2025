function sorter(arr, value) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!inserted && value < arr[i]) {
      result.push(value);
    }
    result.push(arr[i]);
  }

  return result;
}

// function isSorted(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }

module.exports = { sorter, isSorted };
