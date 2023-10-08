const q = require('./main');

describe('q', () => {
    it('should throw an error for non-array input', () => {
        const nonArrayInput = 'not an array';

        expect(() => {
            q(nonArrayInput);
        }).toThrowError('I');
    });

    it('should correctly handle an array with a single element', () => {
        const singleElementArray = [42];
        const sortedArray = q(singleElementArray);

        expect(sortedArray).toEqual([42]);
    });

    it('should correctly handle an empty array', () => {
        const emptyArray = [];
        const sortedArray = q(emptyArray);

        expect(sortedArray).toEqual([]);
    });

    it('should correctly sort an array of numbers in ascending order', () => {
        const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
        const sortedArray = q(unsortedArray);

        expect(sortedArray).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
    });

    it('should correctly sort an array of strings in descending order', () => {
        const unsortedArray = ['apple', 'banana', 'cherry', 'date', 'fig'];
        const sortedArray = q(unsortedArray, (a, b) => b.localeCompare(a));

        expect(sortedArray).toEqual(['fig', 'date', 'cherry', 'banana', 'apple']);
    });
});
