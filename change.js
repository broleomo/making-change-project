// Making Change function
function makeChange(value){
  let quarters = 0
  let dimes = 0
  let nickels = 0
  let pennies = 0
  let count = 0
    for (let quarters = 0; quarters <= value/25; quarters++) {
      for (let dimes = 0; dimes <= (value - 25*quarters)/10; dimes++) {
        for (let nickels = 0; nickels <= (value - (25*quarters + 10*dimes))/5; nickels++) {
          let pennies = (value - (25*quarters + 10*dimes + 5*nickels))
          count ++;
        }
      }
  }
  console.log(count);
}
makeChange(17)

// Ways to Order function

function WaysToOrder(value){
  // if nuggets is divisible by 6
  let twentyPack = 0
  let ninePack = 0
  let sixPack = 0
  let count = 0
  for(let twentyPack = 0; twentyPack <= value/20; twentyPack++){
    for (let ninePack = 0; ninePack <= (value - 20*twentyPack)/9; ninePack++) {
      for (let sixPack = 0; sixPack <= (value -(20*twentyPack + 9*ninePack))/6; sixPack++) {
        count ++;
        if (value % 20, 9, 6 !== 0){
          return null;
        }

      }
    }
  }
    console.log(count);
  }

WaysToOrder(18);
































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
