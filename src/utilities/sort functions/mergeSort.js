const mergeSort = (array) => {
    if(array.length<=1) return array

    const middle = Math.floor(array.length / 2)

    const left = array.slice(0, middle)
    const right = array.slice(middle)
    return mergeArrays(mergeSort(left), mergeSort(right))
}

const mergeArrays = (left, right) => {
    let result = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex< left.length && rightIndex<right.length) {
        if(left[leftIndex]<right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    console.log("result", result)
    return result.concat(left.slice(leftIndex), right.slice(rightIndex))
}

const testArray = [34, 7, 23, 32, 5, 62, 9, 12, 3, 8, 11]
const sortedArray = mergeSort(testArray)
console.log("sortedArray", sortedArray)
export default mergeSort