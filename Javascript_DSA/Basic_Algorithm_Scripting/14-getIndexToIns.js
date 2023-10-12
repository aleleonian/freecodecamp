// function getIndexToIns(arr, num) {

//     arr.sort((a, b) => a - b);

//     let rightPosition = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (num > arr[i]) {
//             if (!arr[i + 1]) {
//                 rightPosition = i + 1;
//             }
//             else {
//                 if (num < arr[i + 1]) {
//                     rightPosition = i + 1;
//                 }
//             }
//         }
//         else if (num == arr[i]) {
//             rightPosition = i;
//         }
//     }

//     return rightPosition;
// }

function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
    let rightPosition = 0;
    for (let i = 0; i < arr.length; i++) {
        if (num > arr[i]) {
            rightPosition = i + 1;
        }
    }
    return rightPosition;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 30));