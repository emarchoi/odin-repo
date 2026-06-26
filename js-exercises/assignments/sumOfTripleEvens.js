
const arr = [1,2,3,4,5];
console.log(sumOfTripleEvens(arr));

function sumOfTripleEvens(array){
    
    const even = array.filter((num) => num % 2 === 0);

    const triple = even.map((num) => num * 3);

    const add = triple.reduce((acc, curr) => acc + curr);

    return add;
}

