
// 00. Camelize
function camelize(text) {

    const char = text.split('-').map((word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1));

    // for(let i = 0; i < char.length; i++){

    //     const temp = char[i];

    //     if(char[i] === '-'){
    //         char.splice(i, 1);
    //         char[i] = char[i].toUpperCase();
    //     }
    // }
    return char.join('');
}
//console.log(camelize("list-style-image"));


// 01. Filter Range
function filterRange(arr, a, b) {

    return arr.filter((num) => (a <= num && num <= b));
}
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
//console.log(filtered);


// 02. Filter Range in Place
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {

        let curr = arr[i];

        if (curr < a || curr > b) {
            arr.splice(i, 1);
            i--;
        }
    }

    return arr;
}
// let arr = [4, 5, 3, 8, 5, 4,2, 1];
// console.log(filterRangeInPlace(arr, 1, 4));


// 03. Sort in Decreasing Order
// let arr = [5, 2, -29, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);


// 04. Copy and Sort Array
function copySorted(arr) {

    let copy = arr.slice();
    copy.sort();

    return copy;
}
// let arr = ["HTML", "JavaScript", "CSS", "Python", "Angular"];
// let sorted = copySorted(arr);
// console.log(sorted);


// 05. Shuffle an Array
function shuffle(array) {

    return array.sort(() => Math.random() - 0.5);
}
// let arr = [1, 2, 3];
// console.log(shuffle(arr));


// 06. Filter Unique Array Members
function unique(arr) {

    let un = [];

    for (let curr of arr) {

        if (!un.includes(curr)) {
            un.push(curr);
        }
    }

    return un;
}
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// console.log(unique(strings));