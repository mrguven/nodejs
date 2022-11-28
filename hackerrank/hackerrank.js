/*let a = [5, 6, 7,90,45,67,56];
let b = [3, 6, 10,89,679,89,100];




function compareTriplets(a, b) {
    
var c =[0,0];
    for (let i =0;i<a.length ; i++){
    if (a[i] > b[i]) {
    
        c[0]+=1;
    }
    else if (b[i] > a[i]) {
    
        c[1]+=1;
    }
    



}
return c;
}






console.log(compareTriplets(a,b));




function hourglassSum(arr) {
    // Write your code here

let max=-5000;

for(let rowIndex = 0;rowIndex<arr.length-2;rowIndex++) {
    
     for(let colIndex=0;colIndex<arr[rowIndex].length-2;colIndex++){
        let tempMax = 0;
    
    for(let tempRowIndex = 0; tempRowIndex<3;tempRowIndex++){
        for(let tempColIndex = 0; tempColIndex<3;tempColIndex++){
        if(tempRowIndex!==1){
            tempMax+=arr[rowIndex+tempRowIndex][colIndex+tempColIndex];
        }
        else if (tempColIndex ===1){
             tempMax+=arr[rowIndex+tempRowIndex][colIndex+tempColIndex];
        }
    
        
    }
    }
    if (tempMax>max){
        max=tempMax;
    }
}
}
return max;
}




*/

arr=[1,6,2,4,5,3];
let sum1 = 0;
let sum2 = 0;
let maxSum = [];
let minSum = [];
let tempSum = 0;
function miniMaxSum(arr) {
    // Write your code here
    
    for (let i = 0; i< arr.length;i++) {
        
      //  sum1 += arr[i];
      
}
if (arr[i] >arr[i+1]) {
    maxSum=arr[i];
}
        
       
    
return maxSum;
}



console.log(miniMaxSum(arr));