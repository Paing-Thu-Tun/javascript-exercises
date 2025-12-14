// const removeFromArray = function(arr, ...items) {
//     for (const item of items) {
//         while (arr.includes(item)) {
//             const index = arr.indexOf(item);
//             arr.splice(index, 1);
//         }
//     }
//     return arr;
// };

const removeFromArray = function(arr, ...args) {
    const newArray = [];
    arr.forEach(item => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}

// const removeFromArray = function(arr, ...args) {
//     return arr.filter(val => !args.includes(val));
// }

// Do not edit below this line
module.exports = removeFromArray;
