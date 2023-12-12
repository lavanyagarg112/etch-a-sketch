const container = document.querySelector(".grids");

for (let i = 0; i < 30; i++){
    const row = document.createElement('div');
    for (let j = 0; j < 30; j++){
        const col = document.createElement('div');
        row.appendChild(col);
        col.style.cssText = 'height: 20px; width: 20px; background: white;';
        col.setAttribute('class', 'box'); 
        
    }
    container.appendChild(row);
    row.style.cssText = 'display: flex;';
}

const boxes = document.querySelectorAll(".box");
const clear = document.querySelector("#clear");
const erase = document.querySelector('#eraser');
const draw = document.querySelector('#draw');
const color = document.querySelector('#colour');

function boxClicked(){

    if (isErase && isMouseDown) {
        this.style.cssText = 'background: white; height: 20px; width: 20px;'
    } else if (isMouseDown){
        if (randomcolor){

            const allcolors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']
            const choose = Math.floor((Math.random()*7));
            const bgcolor = allcolors[choose];

            this.style.cssText = `background: ${bgcolor}; height: 20px; width: 20px;`;
        } else {
            this.style.cssText = "background: black; height: 20px; width: 20px;";
        }
        
    }
    
}   

function gridCleared(){

    boxes.forEach(box => {
        box.style.cssText = 'background: white; height: 20px; width: 20px;'
    });

    isErase = false;
    

}


boxes.forEach(box => {
    box.addEventListener('mousedown', () => {
      isMouseDown = true;
    });
  
    box.addEventListener('mouseup', () => {
      isMouseDown = false;
    });
  
    box.addEventListener('mousemove', boxClicked);
});


clear.addEventListener('click', gridCleared);
let isErase = false;
let randomcolor = false;

erase.addEventListener('click', () => {
    isErase = true;
});

draw.addEventListener('click', () => {
    isErase = false;
    randomcolor = false;
});

color.addEventListener('click', () => {
    isErase = false;
    randomcolor = true;
});






