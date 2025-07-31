/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let i = 0;
while(i<=100){
    console.log(i)
    if(i**2 !==i){
        break;
    }
    
    i++
}
