
var lyricsGenerator = function(beats){
    var boom = "Boom";
    var drop = "Drop the base";
    var breaktb = "!!!Break the base!!!";
    var newarray = [];
    for(var i = 0; i < beats.lenght; i++){
        if(beats[i]==1){
            newarray.push(drop);
            if(beats[i]+beats[i-1]+beats[i-2]==3){
                newarray.push(breaktb);
            }

        }
        else{
            newarray.push(boom);
        }
    }
    return newarray;
};





// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))