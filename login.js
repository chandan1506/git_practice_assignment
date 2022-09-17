                     //problem-1
let N=17;
let count=0;
for(let i=1;i<=N;i++){
 if(N%i==0){
   count++;
 }
}
if(count==2){
console.log("Palindrome");
}

                      // problem-2
let str="madam";
let bag="";
for(i=str.length-1;i>=0;i--){
bag+=str[i];
}
if(bag==str){
console.log(true);
}