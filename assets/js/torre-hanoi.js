//START global-variables
    const gameArea = document.getElementById('game-area');
    const levels = document.getElementById('levels');

    let discsQuantity = 3;
    let difficultyLevel = 'level1';
//END global-variables

//START dynamic-content-main
    const createStacks = () => {
        const stacksArray = [];
        let idCounter = 1;

        //create-three-stacks
        for (let i = 1; i <= 3; i++) {
            const stack = document.createElement("div");

            stack.classList.add("stack");

            stack.setAttribute('id',`stack-${idCounter++}`);

            stacksArray.push(stack);
        }

        return stacksArray;
    }

    const createDiscs = (quantity) => {
        const colorsArray = ["red", "orange", "yellow", "green", "blue", "purple"];
        const discsArray = [];
        let maxWidth = 150;
        
        //create-quantity-discs
        for (let i = 0; i < quantity; i++) {
            const disc = document.createElement("div");

            disc.classList.add("circle");

            disc.style.width = `${maxWidth -= 20}px`;
            
            disc.style.backgroundColor = colorsArray[i];

            discsArray.push(disc);
        }

        return discsArray;
    }

    const stackClick = (event) => {
        const target = event.target;
        const selectedCircle = document.getElementById('control-selected');
        
        //append-disc-to-selected
        if (target.className === "circle" && selectedCircle.childElementCount < 1) {
            const lastElement = target.closest("div.stack").lastElementChild;

            selectedCircle.appendChild(lastElement);
        }
    }

    const checkVictory = () => {
        const stackThreeDiscsCount = document.getElementById("stack-3").childElementCount;

        if (stackThreeDiscsCount === discsQuantity) {
            alert('voce venceu');
        }
    }

    const countPlays = () => {
        //counter
        const countPlays = document.getElementById('control-counter');
        let counter = countPlays.innerText;

        counter++;
        
        countPlays.innerText = counter;
    }

    const switchClique = (event) => {
        const target = event.target;
        const circleToPut = document.getElementById('control-selected').firstChild;
        const stackClass = target.className;

        //check-target
        if (stackClass === "stack"){
            const stackedCircles = target.childElementCount;

            //check-empty-stack
            if(stackedCircles === 0){
                target.appendChild(circleToPut);
        
                countPlays();

                checkVictory();
            }

            else{
                const circleTopStackedWidth = target.lastElementChild.clientWidth;
                const circleToPutWidth = circleToPut.clientWidth;
                
                //check-width
                circleToPutWidth < circleTopStackedWidth ? target.appendChild(circleToPut) : null;

                countPlays();

                checkVictory();
            }
        }
    }

    const startHanoi = (createStacks,createDiscs) => {
        const stacks = createStacks;
        const discs = createDiscs;
        
        //select-game-area
        const area = document.querySelector("#game-area");  
        
        //append-stacks
        stacks.forEach(item => area.appendChild(item));

        //select-stack1
        const stackOne = document.querySelector("#stack-1");

        //append-discs
        discs.forEach(item => stackOne.appendChild(item));
    }

    const setDifficultyLevel = (event) => {
        const difficulty = event.target.value;
        const stacks = Array.from(document.getElementsByClassName('stack'));

        switch (difficulty) {
            case 'level2':
                discsQuantity = 4;

                break;

            case 'level3':
                discsQuantity = 5;

                break;

            default:
                discsQuantity = 3;

                break;
        }

        stacks.forEach(item => item.remove());

        startHanoi (createStacks(),createDiscs(discsQuantity));
    }  

    const resetHanoi = () => {
        const stacks = Array.from(document.getElementsByClassName('stack'));
        const counter = document.getElementById('control-counter');

        //reset-counter
        counter.innerText = '0';

        //remove-old-stacks
        stacks.forEach(item => item.remove());

        //start-new-game
        startHanoi(createStacks(),createDiscs(discsQuantity));
    }  
//END dynamic-content-main

//START functions-call
    startHanoi(createStacks(),createDiscs(discsQuantity));
//END functions-call

//START event-listeners
    gameArea.addEventListener('click', stackClick);
    
    gameArea.addEventListener('click', switchClique);

    levels.addEventListener('input', setDifficultyLevel)
//END event-listeners