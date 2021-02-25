var arr = [45,67,87,23,5,32,60];

//Your code here.

var newarr = [];
var cont = 0;

for(var i = arr.length-1; i>=0;i--){
    newarr[cont]= arr[i];
    cont=cont+1;

};
console.log(newarr);
