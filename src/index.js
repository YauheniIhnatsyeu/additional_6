module.exports = function zeros(expression) {
    expression = expression.split('*');
    var fiveNumber = 0;
    var twoNumber = 0;

    var skipFlag = false;
    var j = 0;
    do {

        for (let i = parseInt(expression[j]); i > 0; i -= checkSkipFlag(expression[j]) ? 2 : 1) {
            if (i % 10 == 2) ++twoNumber;
            if (i % 5 == 0) ++fiveNumber;
            if (i % 25 == 0) ++fiveNumber;
        }

    } while (j++ <= expression.length);
    return twoNumber ? fiveNumber : twoNumber;
}

function checkSkipFlag(val = "") {
    return val.includes("!!");
}