
let container = document.querySelector('.container') ;
let btnImage = document.getElementById('image') ;  
const body = document.body ; 
let inpuChek = document.getElementById('Moodtogle') ;
let labelCheck = document.querySelector('.switch') ;
let span = document.querySelector('span') ;

//------------------------------------ step of change the secreen color
let states = { //object العادي 
   darkmode : {
        bgColor : 'black' , 
        textColor : "white" ,
    }, 
    lightmode : { 
          bgColor : "#fff" ,
         textColor : "black"  ,
     }
   } ;
//------------------------------------------------------  
 

let isdarkMode =  true ;
   function toggleMode () {
     if (isdarkMode) { 
        body.style.backgroundColor = '#ffffffc6' ;
        container.style.backgroundColor = '#123' ; 
        container.style.color = '#fff' ;
        localStorage.setItem('Background' , '#123') ;  
        labelCheck.style.backgroundColor = states.lightmode.bgColor ;   
        span.style.backgroundColor = '#123';
     }
     else{
        body.style.backgroundColor = '#123' ,
        container.style.backgroundColor = '#ffffffc6' , 
        container.style.color = states.lightmode.textColor ;
        labelCheck.style.backgroundColor = '#123' ;   
        span.style.backgroundColor =  states.lightmode.bgColor ;
     }

    isdarkMode = !isdarkMode  ;
  }

inpuChek.addEventListener('change' , toggleMode)











































































