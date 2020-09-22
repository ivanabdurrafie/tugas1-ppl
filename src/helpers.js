
const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;
const subtotal = (qty, price) => {
    return qty * price;
};
const diskon = (qty,price,code)=>{
    if (code != null) {
        if (qty >= 10) {
            if (code == "kode25") {
                return subtotal(qty,price) * 75/100;
            }else {
                subtotal(qty,price);
            }
        }else {
            subtotal(qty,price);
        }
    } else {
        subtotal(qty,price);
    }
    
};

module.exports = {
    incrementQty,
    decrementQty,
    subtotal,
    diskon
};
