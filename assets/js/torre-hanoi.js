const arrayColors = ["blue", "red", "orange", "yellow", "pink", "gray"];
const gameArea = document.querySelector("#game-area");
let contador = 0;

function startHanoi() {
    addStack();
    addId();
    addCircle(5, 170);
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
    
    for (let i = 0; i < quant; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        numerateId.appendChild(circle);
        circle.style.width = `${count -= 20}px`;
        circle.style.backgroundColor = arrayColors[i];
    }
}

gameArea.addEventListener('click', stackClick);
let arr = [];
let verif = false
let target = '';
let pai = '';
const selectedCircle = document.getElementById('control-selected')

function stackClick(e) {
    const numerateIdTwo = document.getElementById("select-2");
    target = e.target
    const lastElement = target.closest("div.stack").lastElementChild;

    if (verif === false) {
        verif = true
        pai = e.target.parentNode;
    }

    if (target.className === "circle" && selectedCircle.childElementCount < 1) {

        selectedCircle.appendChild(lastElement);

        // arr.push(lastElement)
        // arr[0].remove()
    }

    switchClique(target)

    const textoVitoria = document.querySelector("#victory")

    if (numerateIdTwo.childNodes.length === 3) {
        textoVitoria.innerHTML = 'Voce venceu!'
    }
}

const contadorH2 = document.querySelector("#contador")

function switchClique(e) {
    //Variables
    const circleToPut = selectedCircle.firstChild;
   
    const stackClass = e.className;

    //Check-target
    if (stackClass === "stack"){
        //variables
        const stackedCircles = e.childElementCount;

        //check-empty-stack
        if(stackedCircles === 0){
            e.appendChild(circleToPut);
            contador++;
            contadorH2.innerHTML = contador;
        }

        else{
            //variables
            const circleTopStackedWidth = e.lastElementChild.clientWidth;
            const circleToPutWidth = circleToPut.clientWidth;
            
            //check-width
            circleToPutWidth < circleTopStackedWidth ? e.appendChild(circleToPut) : null;

            //counter
            contador++;
            contadorH2.innerHTML = contador;
        }
    }

    // if (e.className === "stack") {
    //     if (e.children.length >= 0) {
    //         arr.length > 0 ? e.appendChild(arr  [0]) : false
           
    //         if (e.children[0].clientWidth < e.lastElementChild.clientWidth) {
    //             paiEl.appendChild(arr[0])
    //             verif = false
    //         } else {
    //             e.appendChild(arr[0])
    //             contador++
    //             contadorH2.innerHTML = contador
    //             verif = false
    //         }
    //         arr.pop()
    //     }
    // }
}

startHanoi();
