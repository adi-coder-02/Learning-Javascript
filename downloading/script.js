// Example of using setTimeout to execute a function after a delay
let tm = setTimeout(function() {
    console.log("This message is displayed after 2 seconds");
},2000);

// Example of using setInterval to execute a function repeatedly at specified intervals
let iv = setInterval(function() {
    console.log("This message is displayed every 3 seconds");
},3000);

// Example of clearing a timeout
clearTimeout(tm);

// Example of clearing an interval
clearInterval(iv); // Note: You need to store the interval ID to clear it properly

// counter variable for interval demonstration
let count = 10 ;
let interval = setInterval(function() {
    console.log("Countdown: " + count);
    count--;
    if (count === 0) {
        clearInterval(interval);
    };
},1000);

// 

