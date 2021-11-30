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

const main = document.querySelector("main");

function startHanoi() {
    addStack();
    addId();
    addCircle(3, 200);
    stackClick();
}

function addStack() {
    for (let i = 0; i < 3; i++) {
        const sectionBox = document.createElement("section");
        const stack = document.createElement("div");

        sectionBox.id = `section-${i}`;
        stack.classList.add("stack");

        main.appendChild(sectionBox);
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

function stackClick() {
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    const section = document.querySelectorAll("section");
    const numerateIdZero = document.querySelector("div#select-0");
    const numerateIdOne = document.querySelector("div#select-1");
    const numerateIdTwo = document.querySelector("div#select-2");
    section[0].addEventListener('click', function (e) {
        arr.push(numerateIdZero.lastElementChild)
        console.log(numerateIdZero.lastElementChild)
        arr[0].remove();
    });
    section[1].addEventListener("click" , function (e) {
        arr2.push(numerateIdOne.lastElementChild)
        numerateIdOne.appendChild(arr[0])
        arr.pop()
        console.log(arr)
    });
    section[2].addEventListener("click" , function (e) {
        arr2.push(numerateIdTwo.lastElementChild)
        numerateIdTwo.appendChild(arr2[0])
        arr.pop()
        console.log(arr)
    });
}

startHanoi();
