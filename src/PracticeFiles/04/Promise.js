

// // Example of Promise No 2
// function add(a, b) {
//     return a + b;
// }
// function error() {
//     return "You Got Error";
// }
// let demo1 = () => {
//     return new Promise((resolve, reject) => {
//         let flag = false;
//         if (flag == true) {
//             resolve(add(5, 10));
//         } else {
//             reject(error());
//         }
//     });
// }
// demo1()
//     .then((value) => console.log("after resolve-->", value))
//     .catch((error) => console.log("after reject-->", error));

// // Example of Promise No 3
// function firstname(firstName) {
//     return firstName
// }
// function error() {
//     return "Name is null";
// }
// let demo2 = () => {
//     return new Promise((resolve, reject) => {
//         const prompt = require('prompt-sync')();
//         let firstName = prompt("Enter Your Fist Name: ");
//         if (firstName == "") {
//             reject(error());
//         }
//         else {
//             resolve(firstname(firstName));

//         }

//     });
// }
// demo2()
//     .then((value) => console.log("Hi guys, My name is" + value))
//     .catch((error) => console.log("Invalid", error));


// // Example of Promise No 4
// function display(firstName, lastName) {
//     console.log("My Name is " + firstName + " " + lastName)

// }
// function error1() {
//     return "First Name is empty";
// }
// function error2() {
//     return "Last Name is empty";
// }
// let demo3 = () => {
//     return new Promise((resolve, reject) => {
//         const prompt = require('prompt-sync')();
//         let firstName = prompt("Enter Your Fist Name: ");
//         let lastName = prompt("Enter Your Last Name: ");
//         if (firstName == "") {
//             reject(error1());
//         }
//         else if (lastName == "") {
//             reject(error2());
//         } else {
//             resolve(display(firstName, lastName));

//         }

//     });
// }
// demo3()
//     .then()
//     .catch((error) => console.log("Invalid", error));



// // Example of Promise No 5
// function display(username) {
//     return "Welcome " + username;
// }
// function error() {
//     return "Login Fails";
// }
// let demo4 = () => {
//     return new Promise((resolve, reject) => {
//         const prompt = require('prompt-sync')();
//         let userName = prompt("Enter Your User Name: ");
//         let password = prompt("Enter Your Password: ");
//         if (userName == "Sidhodhan" && password == "pass123") {
//             resolve(display(userName));
//         }
//         else {
//             reject(error())
//         }

//     });
// }
// demo4()
//     .then((result) => {
//         console.log(result);
//         console.log("Login Successfully");
//     })
//     .catch((error) => console.log("Invalid", error));

// function LastName() {
//     console.log("kamble")
// }
// function Name(LastName) {
//     console.log("Sidhodhan")
//     LastName()
// }
// Name(LastName);

function Name() {
    return new Promise((resolve, reject) => {
        let val = true
        if (val) {
            resolve({
                Name: 'sai',
                LastName: 'Kamble'
            })
        } else {
            reject()
        }
    })
}
Name().then((res) => { console.log(res.Name + ' ' + res.LastName) })
    .catch(error => { console.error(error) })