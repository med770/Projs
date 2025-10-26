


let input = document.getElementById('calc');  
let main = document.querySelector('main') ; 
let btn = document.querySelectorAll('button') ; 
let ecol =  document.querySelector('.egal') ;
let delteAll = document.getElementById('AC')  ;
let del = document.getElementById('del') ;
let date = document.getElementById('date') ;

let arr = [0,1,2,3,4,5,6,7,8,9 ,'.' ,'+','-','/','*'] ;

    
let value = '' ;

function cal(){ 
      btn.forEach(n => { 
       n.addEventListener('click' , function (){  
        arr.forEach( c => {
                if (n.innerText == c)  {
                     value += n.innerText ;  
                    input.value = value ; 
                            }    })
          } )  ;   
     ;  
       

})         // حساب العمليات    
        ecol.addEventListener('click' , function (){ 
               input.value = '' ;
               let result = eval(value) ;  
               input.value = result ;    
        })
                            
                          

         // مسح اخر عنصر
           del.addEventListener('click' , function (){
              let chart = value.slice(0,-1) ; 
              value = chart ; 
              input.value = value ; 
               
           })
     

         // AC للمسح العام          
         delteAll.addEventListener('click' , function(){
               input.value = '' ; 
               value = ''; 
               
         }) 

         date.addEventListener('click',  function (){
            if (value.includes(date.innerText) && date.innerHTML.length > 2 ) {
               let vl = value.indexOf(date.innerText); 
               if (vl.length > 2) {
               } 
               input.value = value ;
             
            }
         })

            

      } 
  
  
  
 

      
            




              

    
                //  if (calcs[i] in ['+','-','/','*']) {
                //          let sign = calcs[i] ;
                //          calcs[i] = '' ; 
                //          input.value = +calcs[i]  +calcs[i] }
    
                //  if (calcs[i] in ['+','-','/','*']) {
                //          let sign = calcs[i] ;
                //          calcs[i] = '' ; 
                //          input.value = +calcs[i]  +calcs[i] 
                //         }
    
                //  if (calcs[i] in ['+','-','/','*']) {
                //          let sign = calcs[i] ;
                //          calcs[i] = '' ; 
                //          input.value = +calcs[i]  +calcs[i] }

 
  cal()           
                    
           

         
                 

        



     

     
        







 




