// ================================================== First problem's solution =============================================================
// This is the problem solution one. Some instruction have been given to follow. According to the instruction I tried to solve the problem number one.
function mindGame(num){
    let multification = num * 3;
    let adding = multification + 10;
    let dividing = adding / 2;
    let result = dividing - 5;
    return result; 
}
let firstTotal = mindGame(5);
let secondTotal = mindGame(50);
let thirdTotal = mindGame(33);





// ================================================== second problem's solution =============================================================
// This is the problem solution two. According to my understanding of the question, I tried to use an array and used coditional for loop. 
let evenOdd = ['Phero', 'Batch7', 'chatgpt'];
for (let i = 1; i <= evenOdd.length; i++ ){
    if(i % 2 == 0){
        console.log("Even");
    }
    else
    console.log("odd");
}



// ================================================== Third problem's solution =============================================================
// First

  function isLGSeven(num){
    let sum = num - 7;
    if (sum < 7) {
      return sum;
    }
  }
  let firstResult = isLGSeven(6);



// second

  function isLGSeven(num){
    let sum = num - 7;
    if (sum < 7) {
      return sum;
    }
  }
  let secondResult = isLGSeven(-15);



// third

  function isLGSeven(num){
    let sum = num - 7;
    if (sum > 7) {
      return num * 2;
    }
  }
  let thirdResult = isLGSeven(15);




// ================================================== Fourth problem's solution ============================================================= 
// First:
    function findingBadData(numbers){
        let negetiveNumbers = 0;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] < 0){
                negetiveNumbers++;
            }
        }
        return negetiveNumbers;
    }
 let final = findingBadData([1, 2, 3]);




//  Second:
 function findingBadData(numbers){
    let negetiveNumbers = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < 0){
            negetiveNumbers++;
        }
    }
    return negetiveNumbers;
}
let final2 = findingBadData([2, -5, -7, -13]);



// Third:
function findingBadData(numbers){
    let negetiveNumbers = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < 0){
            negetiveNumbers++;
        }
    }
    return negetiveNumbers;
}
let final3 = findingBadData([-4, -9, -5, -33, -55]);