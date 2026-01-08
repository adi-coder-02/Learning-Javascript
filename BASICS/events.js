// click event 
document.querySelector("p").addEventListener("click", function() {
    alert("You clicked the paragraph!");
});

// input event
document.querySelector("input").addEventListener("input", function(e) {
    if(e.data !== null){
        console.log("Input value changed to: " + e.data);
    }
});

// change event
document.querySelector("select").addEventListener("change", function(e) {
    console.log("Selected option: " + e.target.value);
});

// keydown event
document.addEventListener("keydown", function(e) {
    console.log("Key pressed: " + e.key);
});

// submit event
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission
    alert("Form submitted!");
});

// mouseover event
document.querySelector("div").addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightblue";
});

// mouseout event
document.querySelector("div").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
});

// event bubbling example


