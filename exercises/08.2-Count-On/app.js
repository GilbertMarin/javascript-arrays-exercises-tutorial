let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let hello = [];
var cont =0;
for(let index = 0; index < myArray.length; index++){
    let element = myArray[index];
    // MAGIC HAPPENS HERE
    if (typeof(element)=='object') {
        hello[cont]= element;
        cont = cont+1;
    }
}

console.log(hello)