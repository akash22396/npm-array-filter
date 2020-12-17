"use strict";
const filterArray = (arrayData, searchValue, objectName) => {
  console.log(objectName)
  let filterValue = arrayData.filter((data) => {
    return objectName ? data[objectName] === searchValue : data === searchValue;
  });
  return filterValue;
};

// console.log(filterArray([1, 2, 3, 4, 5], 1));
console.log(
  filterArray(
    [
      { name: "akash", age: 25 },
      { name: "ravi", age: 28, liveIn: { city: "delhi" } },
      { name: "rajan", age: 25 },
    ],
    28,
    "age"
  )
);
module.exports = filterArray;
