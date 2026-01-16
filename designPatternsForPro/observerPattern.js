// Observer Pattern

/*
Observer Pattern ek design pattern hai jo ek object (subject) ko multiple dependent objects (observers) se connect karta hai. Jab subject mein koi change hota hai, to wo apne observers ko notify karta hai taki wo apne aap ko update kar sakein. Ye pattern event-driven programming mein bahut useful hota hai, jahan ek event hone par multiple actions perform karne hote hain.
Is pattern ka use karne se hum loosely coupled systems bana sakte hain, jahan components ek dusre ke baare mein zyada nahi jaante, sirf itna jaante hain ki unhe notify kiya jayega jab koi change hoga.
*/

class YouTubeChannel {
    constructor(){
        this.subscribers = [];
    }

    subscribe(user){
        this.subscribers.push(user);
        user.update("Subscribed to channel");
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter(sub => sub !== user);
        user.update("Unsubscribed from channel");
    }
    notify(message){
        this.subscribers.forEach(sub => sub.update(message));
    }
}

class User {
    constructor(name){
        this.name = name;
    }
    update(data){
        console.log(data);
    }
}

let channel = new YouTubeChannel();
let user1 = new User("Alice");
let user2 = new User("Bob");

channel.subscribe(user1);
channel.subscribe(user2);
channel.notify("New video uploaded!");

