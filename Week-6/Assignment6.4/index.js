function maxProfit(prices) {
    let profit = 0;
    let buy, buyDay, sell, sellDay;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const currentProfit = prices[j] - prices[i];

            if (currentProfit > profit) {
                buyDay = i + 1, sellDay = j + 1
                buy = prices[j], sell = prices[i]
                profit = currentProfit;
            }
        }
    }

    return {
        Buydate: buyDay, Price: buy, SellDate: sellDay, Price: sell,
        profit
    };
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
