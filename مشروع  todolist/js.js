


let container = document.querySelector('.container') ; 
let input = document.querySelector('.task') ; 
let p2 = document.querySelector('.pAppend') ;
let p = document.getElementById('pSerch') ;  
let btn = document.getElementById('btn') ; 
let hr = document.querySelector('.line') ; 
let div = document.querySelector('.tasks') ;  
let delteAll = document.getElementById('delete') ; 
let ul = document.querySelector('ul') ; 
let search = document.getElementById('search') ; 
//-------



let listTasks = []

 function focustaskOrSearch(){
    input.addEventListener('focus' , function (){
        p2.style.display = 'block';  
        p.style.display = 'none' ;
    })

    search.addEventListener('focus', function (){
        p.style.display = 'block' ;  
        p2.style.display = 'none' ;        
            })


}
// code css
function style(li, btnRemove , newp){
             
            li.style.backgroundColor = '#26a69a' ;
            li.style.marginTop = '1px' ; 
            li.style.listStyle = 'none' ; 
            li.style.padding = '5px' ; 
            li.style.display = 'flex' ; 
            li.style.justifyContent = 'space-between' ; 

            // p 
            newp.style.color= 'white' ; 
            newp.style.marginLeft = '3px' ; 
            newp.style.fontSize = 'small';  
            newp.style.marginTop = '1px' ; 
            newp.style.padding = '0px' ; 
            // btn 
            btnRemove.style.border = 'none' ; 
            btnRemove.style.backgroundColor = 'inherit' ; 
            btnRemove.style.color = 'orange' ; 
            btnRemove.style.cursor = 'pointer' ; 
            btnRemove.style.marginRight = '5px' ; 
            btnRemove.style.position = 'relative' ; 
            btnRemove.style.right = '10px' ; 
            btnRemove.style.fontWeight = '800'
}

// tasks
function tasks() {

      if (input.value !== '') {
        // إنشاء عنصر جديد
            let values  = input.value ; 
            input.value = '' ; 
            listTasks.push(values) ;
            let li = document.createElement('li')  ;
            let newp = document.createElement('p') ;
            let btnRemove = document.createElement('button') ;
            //----------
            newp.appendChild(document.createTextNode(values)) ; 
            btnRemove.appendChild(document.createTextNode('x')) ;
            li.appendChild(newp) ;
            li.appendChild(btnRemove) ;
            ul.appendChild(li);  
            div.appendChild(ul) ; 
            container.appendChild(div) ; 
            container.appendChild(delteAll)   ;
            document.body.appendChild(container)  ;              
            style(li, btnRemove , newp );      
            // remove 
            btnrem(btnRemove , newp , listTasks , li) ;

           // الاكتمال المهمة
            TaskDone(newp) ;

           // المسح التام  
           clearAll(delteAll , ul , li , listTasks) ;
              
            // research  
            search.addEventListener('input' , function (){
                const searchValue = search.value.toLowerCase() ; 
                const searchFilter =  listTasks.filter(
                    n =>  n.toLowerCase().includes(searchValue) 
                ) ;
                ul.innerHTML = '' ; 
                searchFilter.forEach (task => {
                    let li  = document.createElement('li') ; 
                   let newp = document.createElement('p') ;
                   let btnRemove = document.createElement('button') ;
                   newp.appendChild(document.createTextNode(task)) ; 
                   btnRemove.appendChild(document.createTextNode('x'))  ; 
                   li.appendChild(newp) ;
                   li.appendChild(btnRemove) ;
                    ul.appendChild(li);  
                    div.appendChild(ul) ; 
                    container.appendChild(div) ; 
                    container.appendChild(delteAll)   ;
                    document.body.appendChild(container)  ;
                    //
                    style(li,btnRemove,newp) ;
                    btnrem(btnRemove , newp , listTasks , li) ; 
                    TaskDone(newp) ;  
                    clearAll(delteAll , ul , li , listTasks) ;

                } )
            })
            
            
        } 
         
    
    }


    // remove 
function btnrem(btn, newp , list,  li){
    btn.addEventListener('click' , function (){ 
        const indexValue = list.findIndex( n => n.toLowerCase() === newp.innerText.toLowerCase() ) ;
            if(indexValue !== -1){
                list.splice(indexValue , 1) ;
                li.style.display = 'none' ; 
            }  
    })
}  
   // الاكتمال المهمة  
function TaskDone(newp){
    newp.addEventListener('mouseup' , function (){
    newp.style.textDecorationLine = 'line-through' ; 
    newp.style.textDecorationColor = 'black' ; 
     
     })
   }

// المسح التام  
function clearAll(delteAll , ul , li, lisT){
     delteAll.addEventListener('click', function (){ 
     ul.removeChild(li)  ; 
     lisT.splice(values) ;
            
    })  
            
        } 

    

        
focustaskOrSearch()        
btn.addEventListener('click' , tasks) ;

 


















































