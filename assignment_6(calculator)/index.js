let display = document.getElementById('display');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click' , (a)=>{
        buttonText = a.target.innerText;
        if(buttonText=='*'){
            buttonText = '*';
            screenValue += buttonText;
            display.value = screenValue;
        }else if (buttonText == 'C' || buttonText == 'CE'){
            screenValue = "";
            display.value = screenValue;
        }
        else if(buttonText == '='){
            display.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            display.value = screenValue;
        }
    })
}

