let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if(nm.value.length < 2){
        alert("Name must be at least 2 characters long.");
    }
    else {
        alert("Form submitted successfully!");
    }
});

