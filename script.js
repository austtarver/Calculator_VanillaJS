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
            equation+=btn.innerText;
        }else if(btn.id=="operand"){
            operandOne+=btn.innerText;
            output.innerText=operandOne;
            equation+=btn.innerText;
        }else if(output.innerText==operandOne && btn.id=="decimal"){
            operandOne+=".";
            output.innerText=operandOne;
            equation=operandOne;
        }else if(output.innerText==operandTwo && btn.id=="decimal"){
                operandTwo+=".";
                output.innerText=operandTwo;
                //equation.slice(0,-1);
                equation+=operandTwo;    
        }  
        
        if(operandTwo != "" && btn.id == "operator"){
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
                equation+=btn.innerText;
        }else if(btn.id == "operator" ){
            output.innerText=operandOne;
             operator=btn.innerText;
             equation+=btn.innerText;
        }

       


        if(btn.id == "equals"){
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
        return add(parseInt(arr[0]),parseInt(arr[1]));
    }else if(operator==='-'){
        return subtract(parseInt(arr[0]),parseInt(arr[1]));
    }else if(operator==='x'){
        return multiply(parseInt(arr[0]),parseInt(arr[1]));
    }else if(operator=="/"){
        return divide(parseInt(arr[0]),parseInt(arr[1]));
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