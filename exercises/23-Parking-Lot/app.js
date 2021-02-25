let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]

var getParkingLotState = function(lot){
    var sum = 0;
    var available = 0;
    var occupied = 0;
    
    for(var i =0;i<parking_state.length;i++){
        for(var j = 0; j<parking_state[i].length;j++){
            if(parking_state[i][j]==1){
                sum = sum + 1;
                occupied = occupied + 1;
            }
            if(parking_state[i][j]==2){
                sum = sum + 1;
                available = available + 1;
            }     
        
        }
    }
    var state = "TotalSlots: "+sum+", AvailableSlots: "+available+", OccupiedSlots: "+occupied;
    return state;
}
console.log(getParkingLotState(parking_state))