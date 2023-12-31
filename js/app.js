
function createSketchPad() {

  const body = document.querySelector('body');
  const createBtn = document.createElement('button');
  const resetBtn = document.createElement('button');
  resetBtn.classList.add('reset');
  resetBtn.textContent = "RESET";
  createBtn.classList.add('crtBtn');
  createBtn.textContent = 'Create Sketch Pad';
  body.appendChild(createBtn);

  const makeSquares = ()=> {

    const checkIfExist = ()=> {
      const cnt = document.querySelector('.container');
      if (cnt !==null) {
        cnt.remove();
        createInsideDiv();
      } else {
        createInsideDiv();
      }
    }      
  
    checkIfExist();

    function createInsideDiv() {
      const container = document.createElement('div');
      container.classList.add('container');
      body.appendChild(container);
      body.appendChild(resetBtn);
      const squareNumber = prompt('Enter number of squares per side');

      const changeColor = ()=> {
        const rainbowColors = ['red', 'orange', 'yellow','green', 'blue', 'indigo', 'violet']
        const ranNumber = Math.floor(Math.random() * rainbowColors.length);
        // console.log(ranNumber);
        event.target.style.backgroundColor = `${rainbowColors[ranNumber]}`;
      }



      if (+squareNumber < 100){
        // container.style.gridTemplateColumns = `repeat(${squareNumber}, 1fr)`;
        container.setAttribute('style', `grid-template-columns: repeat(${+squareNumber}, 1fr);`);

        

        for (i = 0; i < (+squareNumber * +squareNumber); i++){

          

          const square = document.createElement('div');
          square.setAttribute('class', `square sr${i}`);
          container.appendChild(square);
          
          
          square.addEventListener('mouseover',changeColor);

          resetBtn.addEventListener('click', ()=> {
            square.style.backgroundColor = '#fff';
          })
        } 

        

      } 
      

      }

  
  };
  

  createBtn.addEventListener('click', makeSquares);
  

}


createSketchPad();