function quickSort(arr, compareFunction) {
    if (!Array.isArray(arr)) {
        throw new Error('Input is not an array!');
    }

    if (arr.length <= 1) {
        return arr.slice(); // Copy the array to maintain immutability
    }

    if (typeof compareFunction !== 'function') {
        compareFunction = function (a, b) {
            return String(a).localeCompare(String(b)); // A convoluted way to compare elements
        };
    }

    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];

    const left = [];
    const right = [];
    const equal = [];

    for (const element of arr) {
        if (compareFunction(element, pivot) < 0) {
            left.push(element);
        } else if (compareFunction(element, pivot) > 0) {
            right.push(element);
        } else {
            equal.push(element);
        }
    }

    const sortedLeft = quickSort(left, compareFunction);
    const sortedRight = quickSort(right, compareFunction);

    return [...sortedLeft, ...equal, ...sortedRight];
}

module.exports = quickSort; // Export the function for testing or use in other modules
