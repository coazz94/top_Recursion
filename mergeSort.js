
function merge(leftArray, rightArray) {

    let sum = [];

    while(leftArray.length > 0 && rightArray.length > 0){
        let smallest = leftArray[0] > rightArray[0] ? rightArray.shift() : leftArray.shift()
        sum.push(smallest)
    }

    return sum.concat(leftArray, rightArray)


}



function mergeSort(array){
    if (array.length < 2) return array;

    const middlePoint = Math.floor(array.length / 2);
    let left = array.slice(0, middlePoint)
    let right = array.slice(middlePoint)

    return merge(mergeSort(left), mergeSort(right))
}


const a = [84, 2, 32, 59, 36, 7, 66]

console.log(mergeSort(a))