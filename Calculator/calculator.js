let runningTotal = 0;
let buffer = "0";
let previousOperator;

const rt = document.querySelector('.runningTotal');
const op = document.querySelector('.operator')

function buttonClick(value) {
    if (isNaN(value)) {
        //this is not a number
        handleSymbol(value);
    }else {
        //this is a number
        handleNumber(value);
    }
    rt.innerText = buffer;
    op.innerText = runningTotal;
};

function handleSymbol(symbol) {
    // if(symbol === 'C') {
    //     buffer = '0';
    //     runningTotal = 0;
    // }
    switch(symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if (previousOperator === null) {
                // you need two numbers to do maths
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length === 1){
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    } 
};
 
function handleMath(symbol) {
    if (buffer === '0') {
        //do nothing
        return;
    }

    const intBuffer = parseInt(buffer);

    if (runningTotal === 0){
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;

    buffer = '0';
};

function flushOperation (intBuffer){
    if (previousOperator === '+'){
        runningTotal += intBuffer;
    } else if (previousOperator === '−'){
        runningTotal -= intBuffer;
    } else if (previousOperator === '×'){
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer; 
    }
    // switch (previousOperator) {
    //     case '+':
    //         runningTotal += intBuffer;
    //         break
    // }
};

function handleNumber(numberString) {
    if (buffer === "0"){
        buffer = numberString;    
    } else {
        buffer += numberString;
    }
};

function init(){   //not compulsory
    document.querySelector('.calc-buttons-wrapper')
        .addEventListener('click', function (event) {
            buttonClick(event.target.innerText);    
        })
}

init( );     //notcompulsory 