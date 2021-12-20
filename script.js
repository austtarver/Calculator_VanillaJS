/*
dont concat equation string until right before evaluate function is called.
*/


const btns = document.querySelectorAll('button');
const btn = document.querySelectorAll('.btn');
const output=document.querySelector('#output');
const decimal = document.querySelector('#decimal');

answer="";
equation="";
operandOne="";
operandTwo="";
operator="";
output.innerText=0;
btns.forEach((btn) => {
    btn.addEventListener('click',() => {

        if(operator!= "" && btn.id=="operand"){
            operandTwo+=btn.innerText;
            output.innerText="";
            output.innerText=operandTwo;
        }else if(btn.id=="operand"){
            operandOne+=btn.innerText;
            output.innerText=operandOne;
        }else if(output.innerText==operandOne && btn.id=="decimal"){
            operandOne+=".";
            output.innerText=operandOne;
        }else if(output.innerText==operandTwo && btn.id=="decimal"){
                operandTwo+=".";
                output.innerText=operandTwo;    
        }

        if(operandTwo != "" && answer !="" && btn.id == "operator"){
            equation=answer + operator + operandTwo;
            console.log(equation);
            answer=evaluate(equation,operator);
            operator=btn.innerText;
            equation=answer;
            equation+=operator;
            output.innerText=answer;
            operandOne="";
            operandTwo="";
        }else if(operandTwo != "" && btn.id == "operator"){
            equation=operandOne + operator + operandTwo;
            answer=evaluate(equation,operator);
            operator=btn.innerText;
            equation=answer;
            equation+=operator;
            output.innerText=answer;
            operandOne="";
            operandTwo="";     
        }else if(answer != "" && btn.id == "operator"){
                operandTwo="";
                output.innerText=answer;
                operator=btn.innerText;
              
        }else if(btn.id == "operator" ){
            output.innerText=operandOne;
             operator=btn.innerText;
        }

       

        if(answer != "" && btn.id== "equals"){
            equation=answer+operator+operandTwo;
            console.log(equation);
            answer=evaluate(equation,operator);
            equation=answer;
            equation+=operator;
            output.innerText=answer;
            operandOne="";
            operandTwo="";
        }else if(btn.id == "equals"){
            equation=operandOne + operator + operandTwo;
            answer=evaluate(equation,operator);  
            equation=answer;
            output.innerText=answer;
            console.log(equation);
            operandOne="";
            operandTwo="";
        }

        if(btn.id == "clear"){
            answer="";
            equation="";
            operator="";
            operandOne="";
            operandTwo="";
            output.innerText=0;
        }
    });
});






function evaluate(equation, operator){
    console.log(equation);
    
    arr=equation.split(operator);
    console.log(arr);

    if(operator==='+'){
        return add(parseFloat(arr[0]),parseFloat(arr[1])).toFixed(2);
    }else if(operator==='-'){
        return subtract(parseFloat(arr[0]),parseFloat(arr[1])).toFixed(2);
    }else if(operator==='x'){
        return multiply(parseFloat(arr[0]),parseFloat(arr[1])).toFixed(2);
    }else if(operator=="/"){
        return divide(parseFloat(arr[0]),parseFloat(arr[1])).toFixed(2);
    }
    
}




function add(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
    
}
function divide(x,y){
    return x/y;
}