function print1To10(){
    for(let i=1; i<=10; i++){
        console.log(i);
    }
}
// print1To10();

function printReverse(){
    let a = 10 ;
    while(a >= 1){
        console.log(a);
        a--;
    }
}
// printReverse();

function printEven(){
    for(let i = 1 ; i < 21 ; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}
// printEven();.

function printOdd(){
    let i = 1;
    while(i < 16){
        console.log(i);
        i = i + 2;
    }
}
// printOdd(); 

function printTable(n){
    for(let i = 1 ; i < 11 ; i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
}
// printTable(5);

function printSum(){
    let sum = 0;
    for(let i = 1 ; i < 101 ; i++){
        sum += i;
    }
    console.log(sum);
}
// printSum();

function printNumber(){
    for(let i = 1 ; i < 51 ; i++){
        if(i % 3 === 0){
            console.log(i);
        }
    }
}
// printNumber();

function checkNumber(n){
    for(let i = 1 ; i <= n ; i++){
        if(i % 2 === 0){
            console.log(`${i} is even`);
        }
        else{
            console.log(`${i} is odd`);
        }
    }
}
// checkNumber(15);

function countNumber(){
    let count = 0 ;
    for(let i = 1 ; i < 101 ; i++){
        if(i % 3 === 0 && i % 5 === 0){
            count++;
        }
    }
    console.log(count);
}
// countNumber(); 

function stopLoop(){
    for(let i = 1 ; i < 101 ; i++){
        console.log(i);
        if(i == 7){
            break;
        }
    }
}
// stopLoop();

function skipMultiple3(){
    for(let i = 1 ; i < 21 ; i++){
        if(i % 3 == 0){
            continue;
        }
        console.log(i);
    }
}
// skipMultiple3();

function fistFiveOdd(){
    let count = 0 ;
    for (let i = 1; i < 101; i++) {
        if(i % 2 == 1){
            console.log(i);
            count++;
        }
        if(count == 5){
            break;
        }
    }
}
// fistFiveOdd();

function getScore(...val){
    let sum = 0;
    for(let i = 0 ; i < val.length ; i++){
        sum += val[i];
    }
    console.log(`Total Score: ${sum}`);
}

// getScore(10,20,30,40,50);
