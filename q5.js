//Write a JavaScript function to format a number up to specified decimal places 
//[Marks: 15]
function deci(n, d) {
    if ((typeof n !== 'number') || (typeof d !== 'number'))
    return false;
    n = parseFloat(n) || 0;
    return n. toFixed(d);
    }
    console. log(deci(4.130212, 3));
    
    