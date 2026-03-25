/**
 * ============================================================================
 * PROBLEM: Best Time to Buy and Sell Stock
 * ============================================================================
 * You are given an array prices where prices[i] is the price of a given stock 
 * on the ith day. You want to maximize your profit by choosing a single day to 
 * buy and a different future day to sell. Return the maximum profit.
 * 
 * ============================================================================
 * APPROACH: One Pass - Track Minimum Price
 * ============================================================================
 * Logic:
 * 1. Keep track of the minimum price seen so far (best day to buy)
 * 2. For each day, calculate profit if we sell today (price - minPrice)
 * 3. Update maxProfit if current profit is higher
 * 4. Update minPrice if current price is lower
 * 
 * Key Insight:
 * - We must buy BEFORE we sell
 * - So for each day, we only consider minimum price from previous days
 * - This ensures the buy day is always before the sell day
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass through the prices array
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using two variables (minPrice, maxProfit)
 * ============================================================================
 */

function maxProfit(prices) {
  // Minimum price seen so far
  let minPrice = prices[0];

  // Maximum profit
  let maxProfit = 0;

  // Loop through prices
  for (let i = 1; i < prices.length; i++) {

    // Update minimum buying price
    minPrice = Math.min(minPrice, prices[i]);

    // Calculate profit if sold today
    const profit = prices[i] - minPrice;

    // Update max profit
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}

// Test
console.log(maxProfit([7,1,5,3,6,4])); // 5
