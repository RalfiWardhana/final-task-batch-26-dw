//1.js
function totalUang(num){

    const investasi = 1000000000;
    const depositBank = 350000000;
    const obligasiNegara = 650000000*(30/100);
    const sahamA = 650000000*(35/100);
    const sahamB = 650000000*(35/100);
  
    let untungDepositBank = depositBank*(3.5/100) + depositBank;
    let untungObligasiNegara = obligasiNegara*(13/100) + obligasiNegara;
    let untungSahamA = sahamA*(14.5/100) + sahamA;
    let untungSahamB = sahamB*(12.5/100) + sahamB;
  
  
    let depositBankPerTahun = num * untungDepositBank;
    let obligasiNegaraPerTahun = num * untungObligasiNegara;
    let sahamAPerTahun = num * untungSahamA;
    let sahamBPerTahun = num * untungSahamB;
  
    let total = depositBankPerTahun + obligasiNegaraPerTahun + sahamAPerTahun + sahamBPerTahun;
  
    return total 
  }
  
  console.log(totalUang(2));


//   //1.js
// function totalUang(num){

//     const investasi = 1000000000;
//     const depositBank = 350000000;
//     const obligasiNegara = 650000000*(30/100);
//     const sahamA = 650000000*(35/100);
//     const sahamB = 650000000*(35/100);
  
//     let untungDepositBank = depositBank*(3.5/100) + depositBank;
//     let untungObligasiNegara = obligasiNegara*(13/100) + obligasiNegara;
//     let untungSahamA = sahamA*(14.5/100) + sahamA;
//     let untungSahamB = sahamB*(12.5/100) + sahamB;
  
  
//     let depositBankPerTahun = num * untungDepositBank;
//     let obligasiNegaraPerTahun = num * untungObligasiNegara;
//     let sahamAPerTahun = num * untungSahamA;
//     let sahamBPerTahun = num * untungSahamB;
  
//     let total = depositBankPerTahun + obligasiNegaraPerTahun + sahamAPerTahun + sahamBPerTahun;
  
//     return total 
//   }
  
//   console.log(totalUang(2));
  
//   //2.js
//   let array = ["u", "D", "m", "w", "b", "a", "y", "s", "i", "s", "w", "a", "e", "s", "e", "o", "m"," "," "];
//   let dumbways = "Dumbways is awesome";
//   let dumb = dumbways.split("")
  
//   for (let i = 0; i < array.length; i++) {
//     let indexMin = i
//      for (let j = i+1; j < array.length; j++) {
//          if(dumb.indexOf(array[j]) < dumb.indexOf(array[indexMin])){
//            indexMin = j
//          }
//      }
//      dumb[i] = "z"
//      if(indexMin !== i){
//         let tmp = array[indexMin];
//         array[indexMin] = array[i];
//         array[i] = tmp;                 
//       }    
    
//   }
//   const output = array.join("")
//   console.log(output);
  
//   // 3.js
//   function cetakPola(num){
//   for(let i = num ; i > 0 ; i--){
//     if(i%2 == 0){
//       let s =""
//       for(let j = num ; j >= i ; j--){
//         s += " ";
//       }
//       for(let k = 0 ; k < i ; k++ ){
//         s += "+"+" "
//       }
      
//       console.log(s)
//     }
//     else if (i == 1){
//       let s =""
//       for(let j = num ; j >= i ; j--){
//         s += " ";
//       }
//       for(let k = 0 ; k < i ; k++ ){
//         s += "#"+" "
//       }
      
//       console.log(s)
//     }
//     else{
//       let s =""
//       for(let j = num ; j >= i ; j--){
//         s += " ";
//       }
//       for(let k = 0 ; k < i ; k++ ){
//         if((k+1) % 2 == 0){
//           s += "#"+" "
//         }
//         else{
//           s += "+"+" "
//         }
        
//       }
      
//       console.log(s)
//     }
    
//   }
//   }
//   cetakPola(5)