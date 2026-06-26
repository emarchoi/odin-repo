//1. Add 7
function add7(n) {
    return n + 7;
}

//2. Multiply
function multiply(a, b) {
    return a * b;
}

//3. Capitalize
function capitalize(string) {
    let word = String(string).toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
}

//4. Last Letter
function lastLetter(string) {
    let word = String(string);
    return word.charAt(word.length - 1);
}

console.log(add7(10));
console.log(multiply(2, 3));
console.log(capitalize("aBcD"));
console.log(lastLetter("abcd"));