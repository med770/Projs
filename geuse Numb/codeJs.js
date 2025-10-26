
let input = document.querySelector('input') ; 
let btn = document.querySelectorAll('button') ; 
let p  = document.querySelector('.mess') ; 

let live = 6 ;

// choose rebote 
function choiseNum(){
    // change number from floot(.5555) to a simple Number by Math.floor
    let choseReb = Math.floor(Math.random() * 11 ) ; 
    return choseReb ;
} 

// color
function Color(color1, color2){
     input.style.cssText = `outline-color: ${color1} ; border: 1.5px solid ${color2}; `
}


// choose  rebote
let choseReb = choiseNum() ;
console.log(choseReb)


function guess(){  
    if (input.value !== '' ){   
        let value = input.value ;
        input.value = '' ;   
        if ( value >=0 && value < 11) { 

            if (value == choseReb && live > 0) { 
                input.value = value ; 
                Gustrue(value) ; 
                choseReb = choiseNum() ;       
                btn[0].style.display = 'none' ; 
                btn[1].style.display = 'inline-block' ;
            }  

            else{
                live -=1 ; 
                if (live === 0) {
                    p.innerHTML = `Game Over.YOU LOSE!. The correct number was ${choseReb}`  ;
                    p.style.color = 'red' ;  
                    p.style.fontSige = 'x-small' ;  
                    btn[0].style.display = 'none' ; 
                    btn[1].style.display = 'inline-block' ;
                    live = 6 ; 
                    choseReb = choiseNum() ; 
                }
                else{
                    GusFalse(value) ;
                     
                }

            }  

        }  


        else{
            p.innerHTML = 'Plase Guess Number between 1 and 10' ; 
            p.style.color = 'red' ;    
        } 
        
        }
        
    }
    
 
function Gustrue(value){
   p.innerHTML = `${value} was the coorect number! YOU WON `  ;
   p.style.color = 'green' ;  
   p.style.fontSige = 'x-small' ;    
   Color('rgb(10, 116, 10)' ,'green') ;
   live = 6 ;
}

// if user lost
function GusFalse(value){ 
    p.innerHTML = `${value} is wrong. You have ${live} guesses left. Try again!`  ;
    p.style.color = 'red' ;  
    p.style.fontSige = 'x-small' ;  
    Color('red' ,'red') ;
}




btn[0].addEventListener('click' , guess) ; 


btn[1].addEventListener('click' , function (){
        p.innerHTML = '' ;  
        input.value = '' ;  
        btn[0].style.display = 'inline-block' ;
        btn[1].style.display = 'none' ;   
        Color('rgb(92, 215, 217)' , 'rgb(87, 237, 240)')
        guess() ; 
})
    

 