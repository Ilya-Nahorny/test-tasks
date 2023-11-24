// 3-task

const str = 'the-stealth-warrior';

function toCamelCase(str){
    newStr = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] === '-' || str[i] === '_'){
            newStr.push(str[i+1].toString().toUpperCase());
            
        }
        else{newStr.push(str[i])}
    }
    console.log(newStr);
}   
toCamelCase(str)

// 2-task

// const alphaBet = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f : 6,
//     g : 7,
//     h : 8,
//     i : 9,
//     j : 10,
//     k : 11,
//     l : 12,
//     m : 13,
//     n : 14,
//     o : 15,
//     p : 16,
//     q : 17,
//     r : 18,
//     s : 19,
//     t : 20,
//     u : 21,
//     v : 22,
//     w : 23,
//     x : 24,
//     y : 25,
//     z : 26
// }

// const text = 'The sunset sets at twelve o\' clock.';

// function alphabetPosition(text) {
//     const newString = '';
//     textArray = text.toLowerCase().trim().split('');
//     textArray.forEach((letter)=>{
//         if(alphaBet[letter]) newString += alphaBet[letter] + ' '; 
//     })
//     return newString.trim();
// }

// console.log(alphabetPosition(text));



// 1-task

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// function createPhoneNumber(numbers){
//     let phoneNumber = '';
//     if(numbers.length !== 10) alert('Please enter 10 numbers');
//     else {
//          phoneNumber = `(${numbers.slice(0,3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6,10).join('')}`
//          return phoneNumber;
//     }
// }

// createPhoneNumber(numbers) ;