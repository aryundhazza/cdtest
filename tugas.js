// nomor satu

// let input = "AB"
// let output = excelColumnToNumber(input)


// function excelColumnToNumber(columnTitle) {
//     let result = 0;
//     for (let i = 0; i < columnTitle.length; i++) {
//         result = result * 26 + (columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
//     }
//     return result;
// };

// console.log(output)


nomor dua 

function singleNumber(nums) {
    let single = 0;
    for (let num of nums) {
        single ^= num; // XOR operation
    }
    return single;
}

let nums = [1]
let output = singleNumber(nums)
console.log(output)


// nomor tiga
// function isAnagram(s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }

//     const count = {};

//     // Count the frequency of each character in string s
//     for (let char of s) {
//         count[char] = (count[char] || 0) + 1;
//     }

//     // Decrease the frequency based on string t
//     for (let char of t) {
//         if (!count[char]) {
//             return false;
//         }
//         count[char]--;
//     }

//     return true;
// }

// console.log(isAnagram("anagram", "nagaram"))