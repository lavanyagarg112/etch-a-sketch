const container = document.querySelector(".grids");

for (let i = 0; i < 16; i++){
    const row = document.createElement('div');
    for (let j = 0; j < 16; j++){
        const col = document.createElement('div');
        row.appendChild(col);
        col.style.cssText = 'height: 20px; width: 20px;';
        col.setAttribute('class', 'box'); 
        
    }
    container.appendChild(row);
    row.style.cssText = 'display: flex;';
}

const boxes = document.querySelectorAll(".box");
const clear = document.querySelector("#clear");
const erase = document.querySelector('#eraser');
const draw = document.querySelector('#draw');

function boxClicked(){

    if (isErase && isMouseDown) {
        this.style.cssText = 'background: white; height: 20px; width: 20px;'
    } else if (isMouseDown){
        this.style.cssText = "background: pink; height: 20px; width: 20px;";
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


erase.addEventListener('click', () => {
    isErase = true;
});

draw.addEventListener('click', () => {
    isErase = false;
});







