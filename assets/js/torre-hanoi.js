const arrayColors = ["blue", "red", "orange", "yellow", "pink", "gray"];
//START imports
//END imports

//START global-variables
//END global-variables

//START dynamic-content-header
//END dynamic-content-header

//START dynamic-content-main
//END dynamic-content-main

//START dynamic-content-footer
//END dynamic-content-footer

//START functions-call
//START functions-call

//START event-listeners
//END event-listeners

// START exports
// END exports

const gameArea = document.querySelector("#game-area");

function startHanoi() {
    addStack();
    addId();
    addCircle(3, 200);
    // stackClick();
}

function addStack() {
    for (let i = 0; i < 3; i++) {
        const sectionBox = document.createElement("section");
        const stack = document.createElement("div");

        sectionBox.id = `section-${i}`;
        stack.classList.add("stack");

        gameArea.appendChild(sectionBox);
        sectionBox.appendChild(stack);
    }
}

function addId() {
    const numerate = document.querySelectorAll("div.stack")
    for (let i = 0; i < 3; i++) {
        numerate[i].id = `select-${i}`;
    }
}

function addCircle(quant, maxWidth) {
    let count = maxWidth;
    const numerateId = document.querySelector("div#select-0");
    console.log(numerateId);
    for (let i = 0; i < quant; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        numerateId.appendChild(circle);
        circle.style.width = `${count -= 20}px`;
        circle.style.backgroundColor = arrayColors[i];
    }
}

        // const numerateIdZero = document.querySelector("div#select-0");
        // const numerateIdOne = document.querySelector("div#select-1");
        // const numerateIdTwo = document.querySelector("div#select-2");

gameArea.addEventListener('click', stackClick);
let arr = [];
let verif = false
let target = '';
let pai = '';
function stackClick(e) {
    target = e.target
    if (verif === false) {
        verif = true
        pai = e.target.parentNode;
        console.log(pai);
    }
    if (target.className === "circle") {
        const lastElement = target.closest("div.stack").lastElementChild
        arr.push(lastElement)
        arr[0].remove()
    }
    switchClique(target, arr, pai)
}

function switchClique(e, arr, paiEl) {
    console.log(paiEl)
    if (e.className === "stack") {
        if (e.children.length >= 0) {
            arr.length > 0 ? e.appendChild(arr[0]) : false
            console.log(paiEl);
            if(e.children[0].clientWidth < e.lastElementChild.clientWidth){
                paiEl.appendChild(arr[0])
                verif = false
            }else{
                e.appendChild(arr[0])
                verif = false
            }
            arr.pop()
        }
    }
}

startHanoi();
