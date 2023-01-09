let arr = ["Sai", "Sidhodhan", "Rohit"]

let arr1 = arr.map(names => { console.log(names) });

let arr2 = arr.filter(names => {
    if (names === "Sai") {
        return names

    }
})
console.log(arr2);

let arr3 = arr.slice(0, 20);
console.log(arr3)