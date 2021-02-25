var arr = [4,5,734,43,45];

function randomitem(){
    var item = Math.round(Math.random() * (10 - 0));
    return item;
};

for(var i = 0;i<10;i++){
    arr.push(randomitem());
};

console.log(arr);