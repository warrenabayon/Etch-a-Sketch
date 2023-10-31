
const createSketchPad = () => {
  //create main div
  const body = document.querySelector('body');
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  body.appendChild(container);



  
      const resetBtn = document.createElement('button');
      resetBtn.setAttribute('class', 'reset');
      resetBtn.textContent = 'RESET';
      body.appendChild(resetBtn);
      
 
  

 
  const createGrid = () => {
    const sqaureCount = prompt('How many squares ? by ?','0');
    container.style.gridTemplateColumns = `repeat(${sqaureCount}, 1fr)`;


    const changeColor = () => {
      event.target.setAttribute('style', 'background-color: #8b8a8a;');
    };


    for (i = 0; i < +sqaureCount * +sqaureCount; i++) {
      const square = document.createElement('div');
      square.setAttribute('class', `square sq${i}`);
      container.appendChild(square);

      square.addEventListener('mouseover', changeColor);     
     
      resetBtn.addEventListener('click', ()=>{
        square.setAttribute('style', 'background-color: #ffffff');
      });
    }

    
  };

  createGrid();

  

  


  

  
  
  
}

createSketchPad();