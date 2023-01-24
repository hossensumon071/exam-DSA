const arr1 = [2,4,6,8,10,12]
const arr2 = [1,3,6,8,11,13]

const coherenceArr = [2,1,4,3,10,11,12,13]


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

console.log(quickSort(coherenceArr));

