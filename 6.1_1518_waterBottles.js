
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let totalBottles=numBottles;
    let emptyBottles=numBottles;
    while(emptyBottles>= numExchange){
        let fullbottle= Math.floor(emptyBottles/numExchange);
        totalBottles+=fullbottle;
        emptyBottles= fullbottle+(emptyBottles%numExchange)
    }
    return totalBottles
};
