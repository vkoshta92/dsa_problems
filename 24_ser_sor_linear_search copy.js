/**
 * Question: 24_ser_sor_linear_search (Searching: Linear Search)
 * 
 * Explanation (Hinglish):
 * Ye sabse aasaan search hai. Socho tum ek line mein khade bachon mein se kisi ek ko dhund rahe ho. 
 * Tum pehle bachhe se shuru karte ho aur ek-ek karke aage badhte ho jab tak target mil na jaye. 
 * Agar poori line khatam ho gayi aur koi nahi mila, to matlab wo bacha wahan hai hi nahi.
 * 
 * Logic:
 * 1. Zero index se array ke end tak loop chalao.
 * 2. Har element ko target se compare karo.
 * 3. Agar mil jaye to index return karo, warna last mein -1.
 */
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === target) return i

}
return -1;
}

console.log(lineaSerch([3, 2, 6, 8], 2))