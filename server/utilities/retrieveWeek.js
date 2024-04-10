import mongoConnect from "./mongoConnect.js"


const retrieveWeek = async(currentWeek) => {
    const client = await mongoConnect()

    const collection = client.db("Mock-stocks").collection("2016_Below_10")

    if(currentWeek==52) return "year complete" //<--- make recursive

    else try{
        currentWeek++
        const nextWeek = collection.find({
            Date:  currentWeek 
        })
        return nextWeek
    }
    catch(err) {
        return
    }
}

export default retrieveWeek