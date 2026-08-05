/*
 * Problem: Best Time to Buy and Sell Stock
 * Difficulty: Easy
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Given prices[i], choose one day to buy and a later day to sell for maximum profit.
 * Hinglish: Ab tak ka minimum buy price yaad rakho. Aaj sell karne par profit
 * prices[i] - minimumBuy hoga; har day par best answer update karo.
 * Production note: We only need a stream's minimum and answer, so memory O(1) hai.
 */
function maxProfit(prices) {
  let minimumBuy = Infinity;
  let bestProfit = 0;

  for (const price of prices) {
    minimumBuy = Math.min(minimumBuy, price);
    bestProfit = Math.max(bestProfit, price - minimumBuy);
  }

  return bestProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
// Time: O(n), Space: O(1)

module.exports = { maxProfit };
