let a = [5, 6, 7,90,45,67,56];
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



