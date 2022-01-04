module.exports = function reverse(n) {
    let number = Math.abs(n);
    let numberStr = number.toString().split('');
    let numberReverse = [];
    for (let i = numberStr.length; i >= 0; i--) {
        numberReverse.push(numberStr[i]);
    }
    return numberReverse.join('');
}
