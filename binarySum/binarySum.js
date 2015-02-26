/*The function binarySum should add two n-bit binary integers and return their sum.
The input integers are given in the form of n-element arrays.
The sum of the two integers should be stored in binary form in
􏰐an (n+1)-element array.

Example:

binarySum ([1, 1], [1, 1]); // returns [1, 1, 0]
binarySum ([1, 0], [0, 1]); // returns [0, 1, 1]
*/

var binarySum = function (a, b) {
  // Your code here
  var result = [];
  var n = a.length;
  var transfer = 0;
  for (var i = 0; i<n; i++) {
  	result[n-i] = (a[n-1-i] + b[n-1-i] + transfer) % 2;
  	transfer = (a[n-1-i] + b[n-1-i] + transfer) >=2 ? 1 : 0;
  }
  result[0] = transfer;
  return result;
}