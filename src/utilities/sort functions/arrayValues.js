const arrayValues = async(array, value) => {
    const values = await Promise.all(array.map(item => item[value]))
    console.log("values length", values.length)

    const result = new Set(values)
    console.log(`There are ${result.size} values in the given array`)
}

export default arrayValues


