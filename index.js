let incre = 0

function inc(){
    incre=incre+1;
    document.getElementById("count").innerText=incre;
}

let saveme = document.getElementById("display");
let one = 0;
let dismay = "";

function save(){
    let count = incre; 
    one = one + 1;
    let dis = "Day " + one + " : " + count + "\n" 
    dismay = dismay + dis;
    saveme.innerText = dismay; 
    incre=0;
}
