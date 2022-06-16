const add = function(a,b) {
	let solution = Number(a)+Number(b);
  updateDisplay(solution);
};

const subtract = function(a,b) {
	updateDisplay(a-b);
};

const multiply = function(a,b) {
  updateDisplay(a*b);
};

const divide = function(a,b) {
  updateDisplay(a/b);
}

const a = 3;
const b = 4;
const operator = "divide";

const operate = function (operator, a, b){
  if (operator==="*"){
    multiply(a,b);
  }else if(operator==="+"){
    add(a,b);
  }else if(operator==="-"){
    subtract(a,b);
  }else if(operator==="/"){
    divide(a,b);
  }else{
    "try again";
  }
    
}


//on any number button click begin the calculation function


  //start operation
  let firstNumber = '';
  let secondNumber ='';
  
  //associate the button click
  //assign operator
    
  
  const selectFirst = function(){
    secondNumber ='';
    firstNumber = '';
    document.querySelector('.numberWrapper').onclick = function(event) {
      var a = event.target.innerHTML;
      
      firstNumber += a;
      updateDisplay(firstNumber);
      selectOperator(firstNumber);
    }
    
  }
  const selectOperator = function(firstNumber){
    document.querySelector('.operator').onclick = function(event){
      var b = event.target.innerHTML;
      updateDisplay(b);
      selectSecond(firstNumber, b);
      } 
      
     }
      
  const selectSecond = function(firstNumber, b){
    document.querySelector('.numberWrapper').onclick = function(event) {
      var c = event.target.innerHTML;
      
      secondNumber += c;
      updateDisplay(secondNumber);
      selectEquals(b,firstNumber,secondNumber);
          } 
      
  }
const selectEquals = function(b,firstNumber,secondNumber){
  let equals = document.getElementById('equal')
  equals.addEventListener('click', () => operate(b,firstNumber,secondNumber));
}
//update display
let displayVar = document.querySelector(".display");

const updateDisplay = function(a){
  displayVar.textContent = a;
}
  
//enter the second number

//display button clicks
const calculate = function(){
  selectFirst();
  }

calculate();

let clear = document.getElementById('clear')
clear.addEventListener('click', function(event){
  updateDisplay('');
  calculate();
});

// const numberbutton = document.querySelectorAll(".number");
// numberbutton.addEventListener("click", () => return )


// console.log(numberbutton);