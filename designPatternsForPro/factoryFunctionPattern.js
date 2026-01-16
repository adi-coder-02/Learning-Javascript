// Factory Function Pattern
/*
Factory Function Pattern ek design pattern hai jo functions ka use karke objects create karta hai. Is pattern mein, hum ek function define karte hain jo naye objects return karta hai, jisme hum properties aur methods define kar sakte hain. Ye pattern especially tab useful hota hai jab hume multiple similar objects create karne hote hain.

bina 'new' keyword ke objects create karne ke liye factory functions ka use kiya jata hai.

yeh pattern jab useful hai jb tumhe ek hi type ke multiple objects create krne ho for ex -> users, products, etc.
 */

function createProduct(name , price){
    let stock = 10;

    return {
        name,
        price,
        buy(qty){
            if(qty <= stock){
                stock -= qty;
                console.log(`Purchased - ${stock} items left`);
            }
        },
        refill(qty){
            stock += qty;
            console.log(`Refilled - ${stock} items in stock`);
        },
        getStock(){
            return stock;
        }
    };
};

let p1 = createProduct("iphone" , 50000);
