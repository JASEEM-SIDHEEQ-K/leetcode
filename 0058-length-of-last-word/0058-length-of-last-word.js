/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let res=s.trim().split(" ")
    let l=res.length
    return res[l-1].length
};