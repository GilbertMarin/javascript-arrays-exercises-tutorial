var arr = [4,5,734,43,45];

function item(){
    var item = Math.round(Math.random() * (10 - 0));
    return item;
}

for(var i = 0; i <2; i++){
arr.push(item());
}
console.log(arr);
