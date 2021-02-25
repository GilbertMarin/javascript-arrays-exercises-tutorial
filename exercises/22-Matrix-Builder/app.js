// Code goes here
function matrixBuilder(number){
    var matriz = [];
    for(var i=0;i<number;i++){
        matriz[i] = [Math.round(Math.random())];
        for(var j = 0;j<number;j++){
            matriz[i][j] = Math.round(Math.random());
        }
    }

    return matriz;
}


// do not change anything from this line down
console.log(matrixBuilder(5))