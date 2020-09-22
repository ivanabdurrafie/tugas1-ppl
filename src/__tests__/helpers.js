/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const {
    incrementQty,
    decrementQty,
    subtotal
} = require('../helpers');

test("Test qty 1 + 1 hasilnya 2", () => {
    expect(incrementQty(1)).toBe(2);
});

test("test qty 2 - 1 hasilnya 1", () => {
    expect(decrementQty(2)).toBe(1);
})
