// hasTargetSum.js

/**
 * Returns true if any two numbers in the array add up to the target.
 * @param {number[]} array - Array of integers
 * @param {number} target - Target sum
 * @returns {boolean}
 */
function hasTargetSum(array, target) {
  // Create a set to keep track of numbers we've seen
  const seenNumbers = new Set();

  // Iterate through each number in the array
  for (const num of array) {
    // Calculate the complement that would add up to the target
    const complement = target - num;

    // If the complement exists in the set, we've found a pair
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Otherwise, add the current number to the set and keep looking
    seenNumbers.add(num);
  }

  // If no pairs add up to the target, return false
  return false;
}

// Test cases
if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([0, -1, 2, 9], 1));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 5));
}

module.exports = hasTargetSum;


module.exports = hasTargetSum;
