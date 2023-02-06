//Write a program that takes a number of greater than 5 digits from input field and 
//shows sum of all odd numbers. For example, if the input is 196783, the sum would 
//be 1 + 9 + 7 + 3 = 20.
function sumofodd(){
const num=    document.getElementById("num").value;
num.split("");
const result = document.getElementById("res");
let x =0;
for(let i =0; i < num.length; i++){
    if(parseInt(num[i]) %2 !==0){
        x+=parseInt(num[i]);
    }
    result.innerHTML = x;

    
}

}