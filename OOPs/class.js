// OOPS Concepts in JavaScript

class CreatePencil {
    constructor(name, comapny, color , price) {
        this.name = name;
        this.comapny = comapny;
        this.color = color;
        this.price = price;
    }

    write(text){
        let h1 = document.createElement('h1');
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
}

// Creating instances of CreatePencil class\
let pencil1 = new CreatePencil('HB', 'Faber-Castell', 'blue', 10);
let pencil2 = new CreatePencil('2B', 'Staedtler', 'black', 15);