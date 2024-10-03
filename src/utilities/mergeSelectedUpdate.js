/* import { selectedFuture } from "../StateManager";

const mergeSelectedFuture = async (updateObject) => {
  const futureObject = { ...selectedFuture.value };
  console.log("selectedFuture Before", futureObject)
  for (let key in futureObject) {
    if (Array.isArray(futureObject[key]) && Array.isArray(updateObject[key])) {
      futureObject[key].unshift([...updateObject[key].reverse()]);
    } else if (!Array.isArray(futureObject[key])) {
      console.warn(`futureObject[${key}] is not an array`, futureObject[key]);
    } else if (!Array.isArray(updateObject[key])) {
      console.warn(`updateObject[${key}] is not an array`, updateObject[key]);
    }
  }
  console.log("selectedFuture After", futureObject)

  return futureObject;
};

export default mergeSelectedFuture;
 */

const mergeArrays = async (updateArray, currentArray) => {
  const updateReversed = [...updateArray.reverse()]
  const mergedArray = [...updateReversed, ...currentArray]
  return mergedArray
};

export default mergeArrays;
