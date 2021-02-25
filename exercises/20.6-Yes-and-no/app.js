let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
function Cambios(value){
    if(value==1){
        return 'Wiki';
    }
    else{
        return 'Woko';
    };
};

console.log(theBools.map(Cambios));
