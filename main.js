function q(arr, c) {
    if (!Array.isArray(arr)) {
        throw new Error('I');
    }

    if (arr.length <= 1) {
        return arr.slice();
    }

    if (typeof c !== 'function') {
        c = function (a, b) {
            return String(a).localeCompare(String(b));
        };
    }

    const pI = Math.floor(Math.random() * arr.length);
    const p = arr[pI];

    const l = [];
    const r = [];
    const e = [];

    for (const eL of arr) {
        if (c(eL, p) < 0) {
            l.push(eL);
        } else if (c(eL, p) > 0) {
            r.push(eL);
        } else {
            e.push(eL);
        }
    }

    const sL = q(l, c);
    const sR = q(r, c);

    return [...sL, ...e, ...sR];
}

module.exports = q;
