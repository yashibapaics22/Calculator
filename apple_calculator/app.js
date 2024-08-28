// query selector all returns node list basically an array
let buttons=document.querySelectorAll('button');
let input=document.querySelector('input');


function clearInputAfterDelay() {
    setTimeout(function() {
        input.value = '';
    }, 10000); // 10000 milliseconds = 10 seconds
}


//array is iterable so we use for of ... for in used in objects
for (let button of buttons){
    //button click karne pe ek function chalega
    button.addEventListener('click',function(event){
        let btnText=event.target.innerText;
        if (btnText=='C'){
            input.value='';
        }
        //eval is a method in js used to evaluate
        else if (btnText==='='){
            try{
                input.value=eval(input.value);
            }
            catch(e){
                input.value='Invalid';
            }
        }
        else{
            input.value+=btnText;
        }
    })
}

//try me we put those things that we do are correct/sahi/valid
//catch does error handling ....put those things that are invalid