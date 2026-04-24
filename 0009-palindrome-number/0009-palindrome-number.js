/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let n=x.toString().split("").reverse().join("")
    console.log(n)
    
   return n ==x
};