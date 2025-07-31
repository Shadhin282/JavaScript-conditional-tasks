/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let s = 0;
let sum =0;
while(s<200){
    s++;
    sum = sum + s;
    if(sum>=100){
        break;
    }
    
    console.log(sum)
    
}