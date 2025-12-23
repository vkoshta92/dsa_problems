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
