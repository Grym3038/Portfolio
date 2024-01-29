
var myArray = [2, 5, 8, 11];


var addOneAndLog = function(number) {
  var result = number + 1;


  console.log(result);
};

var processNumber = function(callback, number) {
  if (number % 2 === 0) {
    callback(number);
  } else {
    console.log("the number is odd");
  }
};

for (var index in myArray) {
  processNumber(addOneAndLog, myArray[index]);
}
