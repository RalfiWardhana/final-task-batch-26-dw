// 3.js
function cetakPola(num){
    for(let i = num ; i > 0 ; i--){
      if(i%2 == 0){
        let s =""
        for(let j = num ; j >= i ; j--){
          s += " ";
        }
        for(let k = 0 ; k < i ; k++ ){
          s += "+"+" "
        }
        
        console.log(s)
      }
      else if (i == 1){
        let s =""
        for(let j = num ; j >= i ; j--){
          s += " ";
        }
        for(let k = 0 ; k < i ; k++ ){
          s += "#"+" "
        }
        
        console.log(s)
      }
      else{
        let s =""
        for(let j = num ; j >= i ; j--){
          s += " ";
        }
        for(let k = 0 ; k < i ; k++ ){
          if((k+1) % 2 == 0){
            s += "#"+" "
          }
          else{
            s += "+"+" "
          }
          
        }
        
        console.log(s)
      }
      
    }
    }
    cetakPola(5)