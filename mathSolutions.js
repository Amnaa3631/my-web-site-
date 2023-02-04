//let root1, root2;

let a = prompt("enter the value of a:", "1");
let b = prompt("enter the value of b:", "4");
let c = prompt("enter the value of c:", "4");

let root_part = Math.sqrt(b * b - 4 * a * c);
let  denom = 2 * a;
let root1 = ( -b + root_part ) / denom;
let root2 = ( -b - root_part ) / denom;
 
document.write("1st root: "+root1+"<br />");
document.write("2nd root: "+root2+"<br />");
 


