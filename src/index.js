module.exports = function reverse (n) {
    let result1 = n.toString().split("").reverse().join("");
    let result2 = parseFloat(result1)
    return (result2)
}