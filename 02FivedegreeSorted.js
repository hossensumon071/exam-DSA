const degreeArr = [2,3,4,5,6,7,8,9,10,11]

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivot = arr[0];
  var left = [];
  var right = [];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort(degreeArr));
// Output: [-1, 0, 1, 2, 3, 4, 5]
