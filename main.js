function quickSort(arr, compareFunction) {
    if (!Array.isArray(arr)) {
        throw new Error('Input is not an array');
    }

    if (arr.length <= 1) {
        return [...arr]; // Return a new array to avoid mutating the original
    }

    if (typeof compareFunction !== 'function') {
        compareFunction = (a, b) => String(a).localeCompare(String(b));
    }

    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];

    const left = [];
    const right = [];
    const equal = [];

    for (const element of arr) {
        const comparisonResult = compareFunction(element, pivot);
        if (comparisonResult < 0) {
            left.push(element);
        } else if (comparisonResult > 0) {
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
