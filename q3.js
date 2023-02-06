//Write a java script function program check whether a string is palindrome or not. 
//[Marks: 15]
function checkPalindrome(string) {

    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}


const string = prompt('Enter a string: ');

const value = checkPalindrome(string);

console.log(value);
