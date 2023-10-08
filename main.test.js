const q = require('./main');

describe('q function', () => {
    it('should throw an error if the input is not an array', () => {
        expect(() => q('not an array')).toThrow('I');
    });

    it('should return the same array if it has 0 or 1 elements', () => {
        expect(q([])).toEqual([]);
        expect(q([1])).toEqual([1]);
    });

    it('should sort an array of numbers in ascending order by default', () => {
        const input = [4, 2, 1, 3];
        const expected = [1, 2, 3, 4];
        expect(q(input)).toEqual(expected);
    });

    it('should sort an array of strings in ascending order by default', () => {
        const input = ['banana', 'apple', 'cherry'];
        const expected = ['apple', 'banana', 'cherry'];
        expect(q(input)).toEqual(expected);
    });

    it('should sort an array of objects based on a custom comparator', () => {
        const input = [
            { name: 'John', age: 25 },
            { name: 'Alice', age: 30 },
            { name: 'Bob', age: 20 },
        ];

        const expected = [
            { name: 'Bob', age: 20 },
            { name: 'John', age: 25 },
            { name: 'Alice', age: 30 },
        ];

        const customComparator = (a, b) => a.age - b.age;
        expect(q(input, customComparator)).toEqual(expected);
    });
});







