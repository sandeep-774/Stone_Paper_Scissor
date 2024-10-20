let stone = document.querySelector(".stone");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let p = document.querySelector(".p");
let r = -1
let i = -1;   
const left_random = () => {
    let random = Math.floor(Math.random()*3);
    let arr_left = ["left_stone.png","left_paper.png","left_scissors.png"];
    left.innerHTML = `<img src="${arr_left[random]}">`;
    r = random;
}

const result = () => {
    if(r==i){
        p.innerHTML = "Match Draw !!";
    }
    else if(r==0&&i==1){
        p.innerHTML = "You Win...";
    }
    else if(r==2&&i==0){
        p.innerHTML = "You Win...";
    }
    else if(r==1&&i==2){
        p.innerHTML = "You Win...";
    }
    else{
        p.innerHTML = "Computer Win..."
    }
}

function sleep(ms){
    return new Promise( resolve => setTimeout(resolve,ms));
}



stone.addEventListener("click",() =>{
    async function example() {
        p.innerHTML = "Wait...";
        await sleep(1000);
        left_random();
        right.innerHTML = `<img src="right_stone.png">`;
        i=0;
        result();
    }
        example();
        
})
  
paper.addEventListener("click",() =>{
    async function example() {
        p.innerHTML = "Wait...";
        await sleep(3000);
        left_random();
        right.innerHTML = `<img src="right_paper.png">`;
        i=1;
        result();
    }
        example();
})
scissor.addEventListener("click",() =>{
    async function example() {
        p.innerHTML = "Wait...";
        await sleep(3000);
        left_random();
        right.innerHTML = `<img src="right_scissors.png">`;
        i=2;
        result();
    }
        example();
})




