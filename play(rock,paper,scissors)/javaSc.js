
let container = document.querySelector('.container') ; 
let rock = document.getElementById('rock') ; 
let paper  = document.getElementById('paper') ; 
let sciss = document.getElementById('sciss') ;  
let btnUser = document.getElementById('btnUser') ; 
let btnRob  = document.getElementById('btnRob')
let imgUser = document.getElementById('User') ; 
let imgRob = document.getElementById('Robot') ;  
let h3  = document.querySelector('h3')

let arr = ['paper' , 'rock' , 'sciss'] ; 

// choose the robote
function chooseReb() {
    let robot =  arr[Math.floor(Math.random() * arr.length  ) ] ; 
    return  robot ;
}

// User chooses rock
function chooserock(){ 
     btnUser.removeAttribute('class') ;
     imgUser.src = 'img/rock.png' ; 
    
     //   
     let robot = chooseReb() ;
     btnRob.removeAttribute('class') ; 
     if (robot === 'paper' ) {
         imgRob.src = 'img/paper.png' ; 
         h3.removeAttribute('class')   ; 
         h3.innerText = 'You Lost!' ;
        
     } 
     else if(robot === 'rock'){
        imgRob.src = 'img/rock.png' ; 
         h3.removeAttribute('class')   ; 
         h3.innerText = 'التعادل '
     } 
     else{
        imgRob.src = 'img/scisoors.png' ; 
         h3.removeAttribute('class')   ; 
         h3.innerText = 'You won!'
     }
} 

//User chooses Paper
function choosePaper(){ 

    btnUser.removeAttribute('class') ;
    imgUser.src = 'img/paper.png' ; 

    //  
    let robot = chooseReb() ;
    btnRob.removeAttribute('class') ; 
     if (robot === 'sciss' ) {
         imgRob.src = 'img/scisoors.png' ; 
         h3.removeAttribute('class')   ; 
         h3.innerText = 'You Lost!' ;
        
     } 
     else if(robot === 'paper'){
        imgRob.src = 'img/paper.png' ; 
         h3.removeAttribute('class')   ; 
         h3.innerText = 'التعادل '
     } 
     else{
        imgRob.src = 'img/rock.png' ; 
         h3.removeAttribute('class')   ; 
         h3.innerText = 'You won!'
     }
}

//User chooses Sciss 
function chooseSciss(){
     // User      
     btnUser.removeAttribute('class') ;
     imgUser.src = 'img/scisoors.png' ;  
     
     //  robot 
    let robot = chooseReb() ;
     btnRob.removeAttribute('class') ; 
     if (robot === 'rock' ) {
         imgRob.src = 'img/rock.png' ; 
         h3.removeAttribute('class')   ; 
         h3.innerText = 'You Lost!' ;
        
     } 
     else if(robot === 'sciss'){
        imgRob.src = 'img/scisoors.png' ; 
         h3.removeAttribute('class')   ; 
         h3.innerText = 'التعادل '
     } 
     else{
        imgRob.src = 'img/paper.png' ; 
         h3.removeAttribute('class')   ; 
         h3.innerText = 'You won!'
     }
}


// if user choose rock 
rock.addEventListener('click' , chooserock)  ;  

// if user choose Paper 
paper.addEventListener('click' , choosePaper) ; 

// if user choose Sciss 
sciss.addEventListener('click' , chooseSciss) ; 

