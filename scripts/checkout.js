import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

//import '../data/cart-class.js';

async function loadpage(){
    await loadProductsFetch();

    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

    renderOrderSummary();
    renderPaymentSummary(); 
}
loadpage();
/*
Promise.all([
        loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((values)=>{
    console.log(values)
    renderOrderSummary();
    renderPaymentSummary(); 
});
*/
/*
new Promise((resolve) => {
    loadProductsFetch(() => {
        resolve();
    });
}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});

/*
loadProducts(()=>{

    renderOrderSummary();
    renderPaymentSummary();
});
*/