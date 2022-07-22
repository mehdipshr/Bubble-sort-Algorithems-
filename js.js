// function bblSort(arr) {

//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < (arr.length - i - 1); j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     console.log(arr);
// }
// var arr = [234, 43, 55, 63, 5, 6, 235, 547];
// bblSort(arr);


var arr = [234, 43, 55, 63, 5, 6, 235, 547,1,2,344325,6546,634,23]
let bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                
            }
        }
    }
    console.log(arr)
    // return arr;
};
bubbleSort(arr);

