let input = document.getElementById('call');
let  buttons = document.querySelectorAll('button');


let string ="";
let arr = buttons;
arr.forEach(buttons => {
    buttons.addEventListener('click', (v) =>{
        if(v.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(v.target.innerHTML == 'AC'){
            string ="";
            input.value = string;
        }
        else if(v.target.innerHTML == 'Del'){
            string = string.substring(0, string.length-1);
            input.value = string;

        }
        else{
            string += v.target.innerHTML;
            input.value = string;
        }
    });
});