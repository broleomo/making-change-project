// Making Change function


function makeChange(value){
  let quarters = 0
  let dimes = 0
  let nickels = 0
  let pennies = 0
    for (let quarters = 0; quarters <= value/25; quarters++) {
      for (let dimes = 0; dimes <= (value - 25*quarters)/10; dimes++) {
        for (let nickels = 0; nickels <= (value - (25*quarters + 10*dimes))/5; nickels++) {
          let pennies = (value - (25*quarters + 10*dimes + 5*nickels))
        }

      }
      console.log('quarters: ',quarters,' dimes: ',dimes, ' nickels: ', nickels, ' pennies: ', pennies);
    }

}



































//
// let makeChange = function(total){
// let count = 0;
// let coins = [1,5,10,25];
// let changer = function(index, value){
//   let currentCoin = coins[index];
//   value = 4;
//   index = 7;
//   coins[7] = 200;
//
//   if(index === 0){
//     if(value % currentCoin === 0){
//       count++;
//     }
//     return;
//   }
//   while(value >= 0){
//     changer(index-1,value);
//     value -= currentCoin;
//   }
// }
//   changer(coins.length - 1, total);
//   return count;
// };
// console.log(makeChange(4));
