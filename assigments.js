// Assignment 1
function fibo(num){

    return (num <= 0) ? "Please use a positive integer"
        : (num === 0) ? [0]
        : (num === 1) ? [0,1]
        // prevArray + prevArray.at(-1) + prevArray.at(-2)
        : fibo(num - 1).concat(fibo(num - 1).at(-1) + fibo(num - 1).at(-2))

}

// Assignment 2
function merge(left, right) {
    let sum = [];

    // so lange keines der array empty ist vergleiche die Zahlen
    while(left.length > 0 && right.length > 0) {
        // die kleinse Zahl ergibt sich aus dem vergleich Links > Recht, wenn true dann geht Rechts in die Summe, andersrum geht Links in die Summe
        let smallest = left[0] > right[0] ? right.shift() : left.shift();
        sum.push(smallest)
    }

    // nach dem Vergleich wird es immer ein Array mit einer Nummber oder mehreren geben, wir wollen aber auch diese in der Summe haben
    const remainingNumbers = left[0] ? left : right;

    return sum.concat(remainingNumbers)
}


const mergeSort = (array) => {

    // wenn array nur eine Zahl soll man dieses Array zurück geben
    if (array.length < 2) return array;

    // Halbiere Array in 2 Helften
    const half = Math.floor(array.length / 2);
    const left = array.slice(0, half);
    const right = array.slice(half, array.length);

    // merge diese 2 Helften
    return merge(mergeSort(left), mergeSort(right))
}