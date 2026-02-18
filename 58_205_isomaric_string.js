/**
 * Question: 58_205_isomaric_string (String: Isomorphic Strings)
 * 
 * Explanation (Hinglish):
 * Do strings Isomorphic tab hoti hain jab ek string ke letters ko kisi dusre letter se replace karke dusri string banayi ja sake. 
 * Par dhyan rakhna hai: ek letter hamesha dusre fixed letter se hi replace hoga. 
 * Hum do diaries (maps) rakhte hain: ek S se T ki mapping ke liye aur ek T se S ke liye. 
 * Har baar check karte hain ki kya purani mapping abhi bhi valid hai.
 * 
 * Logic:
 * 1. Do maps banao: `mapStoT` aur `mapTtoS`.
 * 2. Loop chalao: agar dono maps mein mapping nahi hai, to nayi mapping set kar do.
 * 3. Agar mapping hai, to check karo ki wo current character ke sath match kar rahi hai ya nahi.
 * 4. Agar match na ho, to false. Last mein true.
 */

var isIsomorphic = function(s, t) {
    let mapStoT={};
    let mapTtoS={};
    for(let i=0;i<s.length;i++){
    if(!mapStoT[s[i]] && !mapTtoS[t[i]]){
        mapStoT[s[i]]= t[i];
        mapTtoS[t[i]]= s[i];  // 2 map reverse also
    }
    // ye check na lagae tb bhi code run hoga kyoko vo phle check kr chuka h.
    // else if(mapTtoS[t[i]]!==s[i]){ // two repetad same na ho alg alg value na ho
    //     return false;
    // }
    else if(mapStoT[s[i]]!==t[i]){ // same repeat nhi hina chiye kyoko  value change ho jti h
        return false;
    }

    }
    return true;
    
};


// other way

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isIsomorphic = function(s, t) {
//     if (s.length !== t.length) return false;
    
//     let mapStoT = {};
//     let mapTtoS = {};
    
//     for (let i = 0; i < s.length; i++) {
//         let chS = s[i];
//         let chT = t[i];
        
//         // Dono side mapping empty ho to nayi mapping bana do
//         if (mapStoT[chS] === undefined && mapTtoS[chT] === undefined) {
//             mapStoT[chS] = chT;
//             mapTtoS[chT] = chS;
//         } else {
//             // Agar pehle se mapping hai, to match karni chahiye
//             if (mapStoT[chS] !== chT || mapTtoS[chT] !== chS) {
//                 return false;
//             }
//         }
//     }
    
//     return true;
// };



// other way
// var isIsomorphic = function(s, t) {
//     if (s.length !== t.length) return false;

//     let mapStoT = {};
//     let mapTtoS = {};

//     for (let i = 0; i < s.length; i++) {
//         let chS = s[i];
//         let chT = t[i];

//         if (mapStoT[chS] === undefined && mapTtoS[chT] === undefined) {
//             mapStoT[chS] = chT;
//             mapTtoS[chT] = chS;
//         } else if (mapStoT[chS] !== chT) {
//             return false;
//         }
//     }

//     return true;
// };
