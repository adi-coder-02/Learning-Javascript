let btn = document.querySelector("#downloadBtn");
let progress = document.querySelector("#progressBar");
let p = document.querySelector("#percentage");

let count = 0;

btn.addEventListener("click", function() {
    let int = setInterval(function() {
            if(count < 100){
                count++;
                progress.style.width = count + "%";
                p.textContent = count + "%";
            }
            else{
                document.querySelector("h2").textContent = "Download Complete!";
                clearInterval(int);
            }
        },30);
    }
);


    
