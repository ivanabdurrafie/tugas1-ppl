/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const {
    incrementQty,
    decrementQty,
    subtotal,
    diskon,
    absQty
} = require('../helpers');

test("Test qty 1 + 1 hasilnya 2", () => {
    expect(incrementQty(1)).toBe(2);
});

test("test qty 2 - 1 hasilnya 1", () => {
    expect(decrementQty(2)).toBe(1);
});

test("test subtotal, 50000 * 1 hasilnya 50000", () => {
    expect(subtotal(1, 50000)).toBe(50000);
});

test("test kode diskon, 50000 * 1 * 75/100 hasilnya 37500", () => {
    expect(diskon(1, 50000, "kode25")).toBe(37500);
});


