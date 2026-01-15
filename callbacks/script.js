// Learning Promises with Callbacks

let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.floor(Math.random)() * 10;
        if (num % 2 === 0) {
            resolve("resolved with " + num);
        }
        else {
            reject("rejected with " + num);
        }
    }, 1000);
});

pr
.then((message) => {
    console.log("Success: " + message);
}
)
.catch((message) => {
    console.log("Error: " + message);
});

// with async/await

async function asyncCall() {
    try {
        let message = await pr;
        console.log("Async Success: " + message);
    } catch (message) {
        console.log("Async Error: " + message);
    }
}
asyncCall();