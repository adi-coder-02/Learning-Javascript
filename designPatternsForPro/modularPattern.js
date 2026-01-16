// Design Patterns for Pro - JavaScript Examples

// Module Pattern -> 
/*
Module Pattern ek design pattern hai jo code ko alag-alag modules mein organize karta hai. Isse hum apne variables aur functions ko private ya public bana sakte hain, jisse code secure aur manageable rehta hai. JavaScript mein, Module Pattern mostly IIFE (Immediately Invoked Function Expression) ka use karke banaya jata hai.

iske andar se hum wahin chezein retuirn krte hai jo bahar use karni hai 

is pattern ka use karne se hum apne code ko encapsulate kar sakte hain, and clean structure, taaki code reuse secure aur manageable rahe.
*/

// Example of Module Pattern in JavaScript:
let Bank = (function() {
    // Private variables and functions
    let balance = 12000;

    function getBalance() {
        console.log(balance) ;
    }

    function setBalance(amount) {
        balance = amount;
    }

    function withdraw(amount) {
        if (amount <= balance) {
            balance -= amount;
            console.log(`Withdrawn: ${amount}. New Balance: ${balance}`);
        } else {
            console.log('Insufficient funds');
        }
    }

    return {
        // Public methods
        getBalance,
        setBalance,
        withdraw
    }
})();

// Revealing Module Pattern ->
/*
Revealing Module Pattern bhi Module Pattern jaisa hi hota hai, lekin isme hum sirf un functions aur variables ko hi expose karte hain jo hum chahte hain. Is pattern mein, hum private members ko define karte hain aur phir unhe ek object ke through publicly expose karte hain.
Isse code aur bhi zyada organized aur readable ho jata hai, kyunki hum clearly define kar sakte hain ki kaunse parts public hain aur kaunse private.
*/

// Example of Revealing Module Pattern in JavaScript:
let Bank2 = (function() {
    // Private variables and functions
    let balance = 12000;

    function getBalance() {
        console.log(balance) ;
    }

    function setBalance(amount) {
        balance = amount;
    }

    function withdraw(amount) {
        if (amount <= balance) {
            balance -= amount;
            console.log(`Withdrawn: ${amount}. New Balance: ${balance}`);
        } else {
            console.log('Insufficient funds');
        }
    }

    return {
        // Public methods
        bal : getBalance,
        deposit : setBalance,
        draw : withdraw
    }
})();

