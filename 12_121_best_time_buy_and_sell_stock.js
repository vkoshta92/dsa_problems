/**
 * Question: 12_121_best_time_buy_and_sell_stock (https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
 * 
 * Explanation (Hinglish):
 * Socho tum share bazaar (stock market) mein ho. Humein ek din saste mein khareedna hai 
 * aur baad mein kisi din mehnge mein bechna hai taaki sabse zyada munafa (profit) ho.
 * Hum har din ka price dekhte hain. Agar aaj ka price ab tak ka sabse sasta hai, to use yaad kar lete hain.
 * Aur agar aaj bechne par zyada profit mil raha hai, to us profit ko save kar lete hain.
 * 
 * Logic:
 * 1. `minValue` ko pehle din ke price pe set karo.
 * 2. `maxProfit` ko 0 rakho.
 * 3. Har din ke price ke liye:
 *    a. Check karo agar aaj bechne par (price - minValue) pehle se zyada profit de raha hai.
 *    b. Agar aaj ka price ab tak ke `minValue` se bhi kam hai, to `minValue` ko update karo.
 * 4. Last mein `maxProfit` return karo.
 */
var maxProfit = function (prices) {
    // jab profit na ho to min value ko age badate rhna h.

    let minValue = prices[0];
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if ((prices[i] - minValue) > maxProfit) {
            maxProfit = prices[i] - minValue;

        }
        if (prices[i] < minValue) {
            minValue = prices[i];
        }
    }
    return maxProfit;
};