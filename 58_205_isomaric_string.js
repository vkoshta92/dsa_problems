// https://leetcode.com/problems/isomorphic-strings/description/

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
