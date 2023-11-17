const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers){
    let phoneNumber = '';
    if(numbers.length !== 10) alert('Please enter 10 numbers');
    else {
         phoneNumber = `(${numbers.slice(0,3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6,10).join('')}`
    }
  console.log(phoneNumber);
  }

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) );