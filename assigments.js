// Assignment 1
function fibo(num){

    return (num <= 0) ? "Please use a positive integer"
        : (num === 0) ? [0]
        : (num === 1) ? [0,1]
        : fibo(num - 1).concat(fibo(num - 1).at(-1) + fibo(num - 1).at(-2))

}

// Assignment 2
function mergeSort(array){
    if (array.length <= 1) return array;

    let right = array.slice(0, (array.length / 2));
    let left = array.slice((array.length / 2));

    return merge(mergeSort(right), mergeSort(left))
}


function merge(left, right) {
    let sum = [];

    while(left.length > 0 && right.length > 0){
        let smallest = left[0] > right[0] ? right.shift() : left.shift();
        sum.push(smallest);
    }
    return sum.concat(right, left)
}
