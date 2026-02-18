/**
 * Question: 6.1_1518_waterBottles (Math: Water Bottles)
 * 
 * Explanation (Hinglish):
 * Humare paas kuch pani ki bhari botalein hain. 
 * Jab hum unhe pee lete hain, to khali botalein bach jati hain. 
 * Shopkeeper se hum khali botalein dekar nayi bhari botalein le sakte hain. 
 * Humein batana hai total kitni botalein hum pee payenge!
 * 
 * Logic:
 * 1. Shuru mein jitni botalein hain, utni toh humne pi li (`totalBottles = numBottles`).
 * 2. Jab tak humare paas khali botalein exchange karne layak hain:
 * 3. `fullbottles = Math.floor(empty / exchange_rate)`.
 * 4. Inhe piyo aur `total` mein jodo.
 * 5. Nayi khali botalein = jo bachi thi + jo abhi exchange se mili.
 */

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let totalBottles = numBottles;
    let emptyBottles = numBottles;
    while (emptyBottles >= numExchange) {
        let fullbottle = Math.floor(emptyBottles / numExchange);
        totalBottles += fullbottle;
        emptyBottles = fullbottle + (emptyBottles % numExchange)
    }
    return totalBottles
};
