
# Installation:

``` 
npm i npm-array-filter
```

# How to use ?
```
const filterArray = require('npm-array-filter');
or
import filterArray from 'npm-array-filter';

// With object name filterArray(arrayData,searchValue,objectName)

filterArray(
    [
      { name: "akash", age: 25 },
      { name: "ravi", age: 28 },
      { name: "rajan", age: 25 },
    ],
    28,
    "age"
);

// Without object name filterArray(arrayData,searchValue)

filterArray([1, 2, 3, 4, 5], 1);
```