// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // jab profit na ho to min value ko age badate rhna h.

    let minValue= prices[0];
    let maxProfit=0;
    for (let i=0;i<prices.length;i++){
        if((prices[i]-minValue)>maxProfit){
            maxProfit=prices[i]-minValue;

        }
        if(prices[i]<minValue){
            minValue= prices[i];
        }
    }
    return maxProfit;
};