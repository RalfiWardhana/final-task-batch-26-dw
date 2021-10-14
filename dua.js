//2.js
let array = ["u", "D", "m", "w", "b", "a", "y", "s", "i", "s", "w", "a", "e", "s", "e", "o", "m"," "," "];
let dumbways = "Dumbways is awesome";
let dumb = dumbways.split("")

for (let i = 0; i < array.length; i++) {
  let indexMin = i
   for (let j = i+1; j < array.length; j++) {
       if(dumb.indexOf(array[j]) < dumb.indexOf(array[indexMin])){
         indexMin = j
       }
   }
   dumb[i] = "z"
   if(indexMin !== i){
      let tmp = array[indexMin];
      array[indexMin] = array[i];
      array[i] = tmp;                 
    }    
  
}
const output = array.join("")
console.log(output);