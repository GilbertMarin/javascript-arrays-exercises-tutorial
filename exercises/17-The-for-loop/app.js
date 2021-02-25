var myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];
let newArray = 0;
for (var index in myArray){
     
    newArray = newArray + myArray[index];
}

console.log(newArray / myArray.length);