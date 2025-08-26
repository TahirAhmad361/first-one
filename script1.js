let div = document.querySelector("div");
let p = document.querySelector("p");
let body = document.querySelector("body");

function createPara(text){
        let para = document.createElement("p");
        div.append(para);
        para.innerText = text;
        para.classList.add("visible")
}

function createIcon(text){
    let icon = document.createElement("i");
    div.after(icon);
    icon.className = text;
    
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function delay2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        body.classList.remove("hacking");
        resolve(200);
    },2000)});
}

(async function hackerMan(){
    await delay(2000);
    body.classList.add("hacking");
    p.innerText = "initializing hack program";
    await delay(1000);
    createPara("Hacking mama`s mobile phone....");
    await delay(1000);
    createPara("finding the password....");
    await delay(1000);
    createPara("Changing the password...."); 
    await delay(1000);
    createPara("the password is changed...."); 
    await delay(1000);
    createIcon("fa-regular fa-face-grin-tongue-wink");
    createIcon("fa-regular fa-face-dizzy");
    createIcon("fa-regular fa-face-meh-blank");
    await delay2();
})();
    para.classList.remove("visible")

