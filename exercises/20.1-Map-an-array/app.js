var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	
    //add your code here and return the new value
    let fahrenheitarray = value*9/5+32;
    
    return fahrenheitarray;


	
});

console.log(arrayOfFahrenheitValues);