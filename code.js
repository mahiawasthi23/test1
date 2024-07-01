// function fibonacci(n){
//     let i = 1;
//     let x = 0;
//     let y =1;
//     let sum = 0;
//     while(i<=n){
//         x = y;
//         y= sum;
//         console.log(sum);
//         sum = x+y;
//         i++;
//     }
// }
// fibonacci(5);


// let target = 10;
// let sum = 0;
// let arr = [5,3,2,4,6];
// for(let i=0; i<arr.length-1; i++){
//     for(let j=1; j<arr.length; j++){
//         sum = (arr[i] + arr[j]);
//         if(sum === target){
//             console.log(i ,j);
//             break;
//         }else if(sum < target){
//             continue;
//         }else{
//             sum = sum - arr[i];
//         }
//     }
// }