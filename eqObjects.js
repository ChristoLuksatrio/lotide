const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅✅✅ Asserstion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Asserstion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
  value = true;
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      value = false;
    }
  }
  return value;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  let arrVal1 = Object.keys(object1); // turns object into array containing keys
  let arrVal2 = Object.keys(object2);
  value = false;
  if (arrVal1.length === arrVal2.length) {
    for (i = 0; i < arrVal1.length; i++) {
      if (object1[arrVal1[i]] === object2[arrVal1[i]]) { // if key's value is equal to other obj's key's value, return true
        if (Array.isArray(object1[arrVal1[i]]) !== true) { // if key's value is not an array, return true
          value = true;
        } else {
          if (eqArrays(object1[arrVal1[i]], object2[arrVal1[i]])) { // if key's value is an array, return true
            value = true;
          }
        }
      }
    }
  }
  return value;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true


const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
