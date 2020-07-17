/** Solution 01 */

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}

var result = feetToMile(15840);
console.log (result)

/** Solution 02 */

function woodCalculator(chairWood, tableWood, bedWood){
    var totalWood = chairWood*1 + tableWood*3 + bedWood*5;
    return totalWood;
}

var sumWood = woodCalculator(9, 5, 7);
console.log(sumWood)

/** Solution 03 */

function brickCalculator(brick){
    var totalBrick;
    if(brick>=1 && brick<=10){
        totalBrick = brick*15*1000;
    }
    else if(brick>=11 && brick<=20){
        totalBrick = 150000 + brick*12*1000;
    }
    else if(brick>=21){
        totalBrick = 390000 + brick*10*1000;
    }
    return totalBrick;
}
    
var sumBrick = brickCalculator(7);
console.log(sumBrick) 

/** Solution 04 */


function tinyFriend (friendName){
    var min = friendName [0];
    for (var i=0; i<friendName.length; i++){
        
        var element = friendName[i];
        if (element.length < min.length){
            min = element;
        }
        
    }
    return min;
}
   var friend = tinyFriend(["Kanak","Chamak","Tahiatul","Mahi","Rim","Pu"]);
   console.log("Tiny Friend is:", friend)
   
    
