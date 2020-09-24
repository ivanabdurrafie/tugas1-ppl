const absQty = (qty) => {
    if (parseInt(qty) < 1) {
        return parseInt(1);
    } else if (parseInt(qty) == 0) {
        return parseInt(1);
    }
    else {
        return parseInt(qty);
    }
};
const incrementQty = (qty) => absQty(qty) + 1;
const decrementQty = (qty) => absQty(qty) - 1;
const subtotal = (qty, price) => {
    return qty * price;
};
const diskon = (qty, price, code) => {
    if (code != null) {
        if (code == "kode25") {
            return subtotal(qty, price) - (subtotal(qty, price) * 25 / 100);
        } else {
            return subtotal(qty, price)
        }
        // if (qty >= 10) {
        //     if (code == "kode25") {
        //         return subtotal(qty,price) * 75/100;
        //     }else {
        //         return subtotal(qty,price);
        //     }
        // }else {
        //     return subtotal(qty,price);
        // }
    } else {
        return subtotal(qty, price);
    }

};

module.exports = {
    incrementQty,
    decrementQty,
    subtotal,
    diskon,
    absQty
};
