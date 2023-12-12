const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(require.main.filename),'data','cart.json');

module.exports = class Cart{
    static addProduct= (id,productPrice) => {
        let cart = {product:[],totalPrice:0};
        fs.readFile(p,(err,fileContent) => {
            if(!err){
                cart = JSON.parse(fileContent);
            }
            const existingProductIndex = cart.product.findIndex(prod => prod.id == id);
            const existingProduct = cart.product[existingProductIndex];
            let updatedProduct = {};
            if(existingProduct){
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.product = [...cart.product];
                cart.product[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = {id:id,qty:1};
                cart.product = [...cart.product,updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p,JSON.stringify(cart),(err)=>{
                console.log(err);
            });
        });
    }
}