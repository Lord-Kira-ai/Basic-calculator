(function(){
    const buttons = document.querySelectorAll('.buttons');
    const screen = document.querySelector('#screen');
    const clear = document.querySelector('#clear');
    const equal = document.querySelector('#equal');
    const back = document.querySelector('#null');
    
    buttons.forEach((buttons)=>{
        // console.log(buttons)
        buttons.addEventListener('click',function(e){
            
            if(e.target.textContent !== 'back'){
            let value = e.target.textContent;
            screen.value += value;
            }
        })
    });
    back.addEventListener('click',function(e){
        // console.log();
        let remove_char = screen.value[screen.value.length-1];
        screen.value = screen.value.replace(remove_char,"");
    })
    equal.addEventListener('click',function(e){
        console.log(equal);
        if(screen.value === ''){
            screen.value = 'Please Enter some Value';
          } else {
            //   let screenvalue = screen.value;
            if(screen.value.includes('🞩')){ 

                let data = screen.value;
                screen.value = data.replace('🞩','*');
            }
            if (screen.value.includes('÷')){ 

                let data = screen.value;
                screen.value = data.replace('÷','/');
            }
            
            // if(screen.value.includes(''))
            let answer = eval(screen.value);
            screen.value = answer;
            
          }

    })

    clear.addEventListener('click',function(){
        screen.value = "";
    })
   
})()