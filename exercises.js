function sumRange(n) {
    if (n === 1) return 1;

    return n + sumRange(n - 1);
}

function power(n, z) {
    if (z === 0) return 0;

    return n * n + power(n, z - 1);
}

function all(array, callback) {
    const copy = array.slice()

    if (copy.length === 0) {
        return true
    }

    if(callback(copy[0])){
        copy.shift();
        return all(copy, callback)
    } else {
        return false
    }


}

let allAreLessThanSeven = all([1, 9, 2], (num) => {
    return num < 7;
});

function productOfArray(array){
    if(array.length  === 1){
        return array[0];
    }

    return array.shift() * productOfArray(array)
}

function contains(obj, value) {
    for(key in obj){
        if(typeof(obj[key]) === "object"){
            return contains(obj[key], value);
        }

        if(obj[key] === value){
            return true;
        }
    }

    return false;
}

function totalIntegers(array){

	if(array.length === 0) return 0;

    let counter = 0;
    let first = array.shift();

    if(Array.isArray(first)){
        counter += totalIntegers(first)
    } else if (Number.isInteger(first)){
        counter += 1;
    }

    return counter + totalIntegers(array);

}

function SumSquares(array){

    let total = 0;
    let first = array[0];

    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            total += SumSquares(array[i])
        } else{
            total += array[i] * array[i];
        }
    }

    return total;
}

function replicate(times, number){
	if(times <= 0) return [];

	return [number].concat(replicate(times - 1, number));
}


