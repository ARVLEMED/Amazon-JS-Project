import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

//import '../data/cart-class.js';

async function loadpage(){
    try {
        await loadProductsFetch();

    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
    } catch (error) {
        console.log('Unexpected error.Please try again later.');
    }
    

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