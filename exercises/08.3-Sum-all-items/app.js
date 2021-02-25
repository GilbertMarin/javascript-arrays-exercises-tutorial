function sumTheElements(theArray){
	
	var total = 0;
	
    //your code here
    for(var i = 0; i< theArray.lenght;i++){
      
        if(typeof(theArray[i])=='number'){
            total = total + theArray[i];
           
        }
    }

	return total;
}
