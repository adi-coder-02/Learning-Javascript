// debouncing -> aap koi action kar rahe ho and aap yeh nhi chahte har action pr kuch ho , jab bhi mere actions ke beech mein koi specific gap aajeye toh fir action ka reaction perform ho 

function debounce(fnc , delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fnc(...args);
        }, delay);
    };
}

document.querySelector("input").addEventListener("input" , debounce(function(){
    console.log("ran");
} , 1000))
