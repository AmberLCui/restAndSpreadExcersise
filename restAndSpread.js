//Refactor to use the rest operator & an arrow function
/* function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num){
    return num % 2 === 0;
    });
} */

const filterOutOdds = (...args) => args.filter(num => num % 2 === 0)

//findMin
function findMin(...num) {
    return Math.min(...num);
};

//Merge Objects
const mergeObjects = (item1, item2) => { [...item1, ...item2] };

//double and return args
const doubleAndReturnArgs = (arr, ...more) => [...arr, ...more.map(num => num * 2)];

//Slice and Dice

//remove a random element in the items array and return a new array without that item
const removeRandom = (items) => {
    let i = Math.floor(Math.random() * items.length);
    return [...items.slice(0, i), ...items.slice(i + 1)];
}

//return a new array with every item in array1 and array2
const extend = (array1, array2) => {
    return [...array1, ...array2]
}

//return a new object with all the keys and values from obj and a new key/value pair
const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}

//return a new object with a key removed
const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}

//combine two objects and return a new object
const combine = (obj1, obj2) => {
    return newObj = {...obj1, ...obj2}
}

//return a new object with a modified key and value
const update = (obj, key, val) => {
    newObj[key] = val;
    return newObj;
}