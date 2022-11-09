let a = [5, 6, 7];
let b = [3, 6, 10];

var c =[0,0];



function compareTriplets(a, b) {
   
    for (let i =0;i<a.lenght ; i++){
if (a[i] > b[i]) {
    
    c[0]=+1;
    return c;
}}

for (let i =0;i<b.lenght ; i++){
if (b[i] > a[i]) {
    
    c[1]=+1;
    return c;
}

}
console.log(c[]);
}