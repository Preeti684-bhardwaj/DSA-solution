// assignment:-----

// 1. find the maximum element in an array
// let arr = [2, 15, 24, 57, 12];
// const maxNumber = function (arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };
// console.log("maximum element in an array",maxNumber(arr));

// ======================================================================================

// 2. find the minimum element in an array

let arr = [2,15,24,1,20,22];
// let findMin = function (arr) {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// };
//  console.log(" minimum element in an array",findMin(arr));

// ============================================================================

// 3. find the second largest element in an array

//1st method
// const secondLargest = function (arr) {
//   let result = maxNumber(arr);
//   let num = arr.indexOf(result);
//   arr.splice(num, 1);
//   return maxNumber(arr);
// };

// 2nd method

//   let temp = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr[arr.length - 2];
// };

// console.log("second largest element in an array",secondLargest(arr));

// =======================================================================================

// 4. find the second smallest element in an array

// const secondSmallest = function (arr) {
  // 1st method:-
  //   let result = findMin(arr);
  //     let num = arr.indexOf(result);
  //     arr.splice(num, 1);
  //     return findMin(arr)

  // 2nd method:--
//   let temp = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr[arr.length - 2];
// };
// console.log("second smallest element in an array",secondSmallest(arr));

// =========================================================================================

// 5. find the sum of all elements in an array

// const sumNum= function(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return sum;
// }

// console.log("sum of all elements in an array",sumNum(arr));

// 6. find the average of all elements in an array

// const averageFunc= function(arr){
//     let store=sumNum(arr);

//     let average=store/arr.length;
//     return average;

// }
// console.log(" average of all elements in an array",averageFunc(arr));

// ==============================================================================================

// 7. find the sum of all even elements in an array

const evenSum=function(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            sum+=arr[i];
        }
    }
    return sum
}
console.log(" sum of all even elements in an array", evenSum(arr));

// ======================================================================================

// 8. find the sum of all odd elements in an array
const oddSum=function(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            sum+=arr[i];
        }
    }
    return sum;

}
console.log("sum of all odd elements in an array", oddSum(arr));

// ================================================================================

// 9. find the number of even elements in an array

const evenNum=function(arr){
     let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            count++;
        }
    }
    return count
}
console.log("number of even elements in an array", evenNum(arr));
// ======================================================================================

// 10. find the number of odd elements in an array

const oddNum=function(){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            count++;
        }
    }
    return count
}
console.log("number of odd elements in an array" , oddNum(arr))


