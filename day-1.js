// function evenOrOdd(n) {
//     if (let i = 1; i % 2 == 0; i++)
//         return "even"
// }
// console.log()

// let num = "251"
// let reverseStr = ""
// for (let i = num.length - 1; i >= 0; i--) {
//     // console.log(num.charAt(i))
//     // reverseStr += num.charAt(i)
//     var num1 = reverseStr += num.charAt(i)
//         return "true"
    
    
// }

function excelColumnToNumber(columnTitle) {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        result = result * 26 + (columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
    }
    return result;
}

// Example usage
let input = 'AB';
let output = excelColumnToNumber(input);
console.log("Input:", input);
console.log("Output:", output); // Output: 28


