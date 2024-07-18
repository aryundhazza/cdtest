// let millis = 100

// async function sleep(millis) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Done");
//         }, millis);
//     });
// }

// console.log(typeof console.log)
// firstName = "john"


var s = ""
for ( var i = 0; i < 5; i++) {
    for ( var j = 0; j <= i; j++) {
         s += "*"
         for ( var k = 5; k > j; k++){
         }
    }
    s += "\n"
}
console.log(s)