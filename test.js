let arr = [1, 2, 0, 0, 5];

let left = []; // [1,2,6,24,120];
let right = new Array(arr.length).fill(1); //[120,120,60,20,5]

let a = 1;

for (let i = 0; i < arr.length; i++) {
  a *= arr[i];
  left.push(a);
}
a = 1;

for (let i = arr.length - 1; i >= 0; i--) {
  a *= arr[i];
  right[i] = a;
}

arr[0] = right[0];
for (let i = 1; i < arr.length - 1; i++) {
  arr[i] = left[i - 1] * right[i + 1];
}
arr[arr.length - 1] = left[arr.length - 2];

console.log(arr);
