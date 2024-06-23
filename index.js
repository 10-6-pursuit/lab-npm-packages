const _ = require("lodash");
const simpleArray = require("./data/simple-array.json");
const yogaClasses = require("./data/yoga.json");
const members = require("./data/members.json");
const newMember = require("./data/new-member");

/**
 * Return the number of keys in an object
 * @param {Object} obj -
 * @return {number} The number of keys in the object
 */
function numberOfKeys(obj) {
  return _.keysIn(obj).length
}

/**
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */
function sumNumbers(array) {
  return _.sum(_.remove(array, (n) => {
    return typeof n === "number"
  }))
}

/**
 * Convert a two-dimensional array of new member data (each inner array having two values: the first being the key, the second being the value) into an object
 * @param {Array[]} member -
 * @return {number} The sum of the numbers in an array
 */
function newMemberArrayToObject(member) {
  let keys = member.map(each => each[0])
  let values = member.map(each => each[1])
  return _.zipObject(keys, values)
}

/**
 * Return an array of objects that grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */
function groupClassByInstructor(collection) {
  return _.groupBy(collection, "instructor")
}

/**
 * Remove the age key from the members array of object
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects, each one without the age field
 */
function omitAgeFromMembers(collection) {}

/**
 * Return the count of the number of classes a particular instructor teaches
 * @param {Object[]} collection - An array of yoga class objects
 * @param {String} instructorName - The name of the instructor
 * @return {number} The sum of the numbers in an array
 */
function countClassesByInstructor(collection, instructor) {}

/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */
function removeInactiveMembers(collection) {}

/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
function getUniqueClasses(collection) {}

/**
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
function orderClassesByTitleAndLevel(collection) {}

module.exports = {
  numberOfKeys,
  sumNumbers,
  newMemberArrayToObject,
  groupClassByInstructor,
  omitAgeFromMembers,
  countClassesByInstructor,
  removeInactiveMembers,
  getUniqueClasses,
  orderClassesByTitleAndLevel,
};



/*


What's is Lodash?

Lodash is a popular JavaScript utility library that provides a wide range of functions to simplify common programming tasks. It helps developers write more concise and readable code by offering utility functions for various operations such as:

- **Array manipulation**: Functions to manipulate arrays, such as filtering, mapping, reducing, finding, and sorting elements.
- **Object manipulation**: Functions to handle objects, such as cloning, merging, and property manipulation.
- **Collection operations**: Functions to work with collections of data (arrays or objects), such as iteration, aggregation, and transformation.
- **String manipulation**: Functions to handle strings, such as trimming, escaping, and converting cases.
- **Type checking**: Functions to check the types of values, such as `isArray`, `isObject`, `isString`, and more.
- **Function utilities**: Functions to handle function operations, such as debouncing, throttling, binding, and currying.

### Key Features of Lodash

1. **Consistency and Predictability**: Lodash methods are consistent in their behavior and follow predictable patterns, making it easier to use them across different parts of a project.
2. **Performance Optimization**: Lodash is optimized for performance and can handle large datasets efficiently.
3. **Modular Methods**: You can use individual Lodash functions as standalone modules, which helps reduce the size of your final bundle when using build tools like Webpack or Rollup.
4. **Cross-Browser Compatibility**: Lodash works consistently across different environments, including older browsers.

### Example Usage

Here's an example of some common Lodash functions:

#### Array Manipulation

```javascript
const _ = require('lodash');

const array = [1, 2, 3, 4, 5, 6];

// Chunk array into smaller arrays of specified size
const chunked = _.chunk(array, 2);
console.log(chunked); // [[1, 2], [3, 4], [5, 6]]

// Remove falsy values from an array
const compacted = _.compact([0, 1, false, 2, '', 3]);
console.log(compacted); // [1, 2, 3]

// Flatten an array of arrays
const nestedArray = [1, [2, [3, [4]], 5]];
const flattened = _.flattenDeep(nestedArray);
console.log(flattened); // [1, 2, 3, 4, 5]
```

#### Object Manipulation

```javascript
const object = {
  a: 1,
  b: '2',
  c: 3
};

// Pick specific properties from an object
const picked = _.pick(object, ['a', 'c']);
console.log(picked); // { a: 1, c: 3 }

// Merge objects
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const merged = _.merge(object1, object2);
console.log(merged); // { a: 1, b: 3, c: 4 }
```

#### Collection Operations

```javascript
const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true }
];

// Filter collection based on a condition
const activeUsers = _.filter(users, { active: true });
console.log(activeUsers); // [{ user: 'barney', age: 36, active: true }, { user: 'pebbles', age: 1, active: true }]

// Find a specific element in a collection
const fred = _.find(users, { user: 'fred' });
console.log(fred); // { user: 'fred', age: 40, active: false }
```

Lodash provides many more functions to handle different tasks, and its comprehensive documentation makes it easy to find the right method for your needs. By incorporating Lodash into your projects, you can streamline your code and improve readability and maintainability.


*/