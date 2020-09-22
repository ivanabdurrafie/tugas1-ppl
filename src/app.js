import { 
  incrementQty, 
  decrementQty,
  subtotal,
  diskon
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const okButton = document.querySelector('#confirmButton');
const qtyInput = document.querySelector('#qty');
const priceInput = document.querySelector('#price');
const subtotalInput = document.querySelector('#subtotal');
const codeInput = document.querySelector('#code');

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subtotalInput.textContent = `Rp. ${subtotal(qtyInput.value,priceInput.value)}`;
  // qtyInput.setAttribute("type","int");
  // priceInput.setAttribute("type","int");
  
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subtotalInput.textContent = `Rp. ${subtotal(qtyInput.value,priceInput.value)}`;
  // qtyInput.setAttribute("type","int");
  // priceInput.setAttribute("type","int");
});

okButton.addEventListener('click',() => {
  subtotalInput.textContent = `Rp. ${diskon(qtyInput.value,priceInput.value,codeInput.value)}`;
});