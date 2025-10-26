
let container =  document.querySelector('.container') ; 
let input = document.querySelector('.input') ;  
let btn = document.querySelector('button') ;
let cityName = document.querySelector('div h2') ;  
let img = document.querySelector('div #sp1 img ') ; 
let span2 = document.querySelector('div #sp2') ; 
let p  = document.querySelector('p') ;   

let pTable= document.querySelectorAll('#table #tab') ;
let pTableRes = document.querySelectorAll('#table #res') ;



btn.addEventListener('click' , function (){
    if (input.value !== '') {
          let value = input.value ;  
           input.value  = '' ;

    async function get() {
        try{
            let fetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=f86ce41678d9576ae7ee1fc841477fbe&units=metric`) ; 
            let weather = await fetch.json() ; 
           // console.log(weather) ; 
                    //  
                    cityName.innerHTML = value ; 
                    //
                    span2.innerHTML = `${Math.floor(weather.main.temp)}C` ;  
                    // لإدخال البيانات في أماكنها    
                    console.log(weather) ;
                    for (let i = 0 ; i <  4; i++) {
                         if (i === 0) {
                             pTableRes[i].innerHTML =  weather.weather[0].main ;
                            }
                        else if( i === 1){
                            pTableRes[i].innerHTML =  weather.wind.speed ; 
                         }  
                        else if ( i === 2){ 
                            pTableRes[i].innerHTML =  weather.clouds.all ; 
                            
                        }
                        else{
                            pTableRes[i].innerHTML =  weather.main.humidity ; 
                         }                   
                   
                        }
                         
               
                    // img  إستخراج الصور من الموقع
                    img.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` ; 

                    // -------------------
                    cityName.style.color = 'black' ;
                    span2.style.position = 'relative' ; 
                    span2.style.bottom = '50px'; 
                    span2.style.left = '5px' ; 
                    span2.style.fontFamily = 'system-ui' ; 
                    span2.style.fontSige =  'xx-large' ;
                    span2.style.fontWeight = '600' ;

                 }  

            catch{               
                cityName.innerHTML = "city is not found or there's a prob "    ; 
                cityName.style.color = 'orange' ; 
                cityName.style.fontSige = 'smaller'  ; 
                img.src = '' ;
                span2.innerHTML = '' ;  
                for (let i = 0; i < pTableRes.length; i++) {
                    pTableRes[i].innerHTML = '' ;                   
                }
            } 
          } 

          get()
    }
})