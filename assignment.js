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