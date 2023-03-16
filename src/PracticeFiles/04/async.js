// Example of Promise

function add(a, b) {
    return a + b;
}

function resolveAfter() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(add(5, 5));
        }, 10000);
    });
}
function resolveBefore() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(add(5, 5))
        }, 1000);

    })
}

//async fuction
async function asyncCall() {
    let add = 5;
    console.log("calling");
    const result1 = await resolveAfter();
    const result2 = await resolveBefore();
    console.log("after resolve result ", result1);
    const FinalResult = result1 + result2;
    console.log("after resolve ", FinalResult);

}

asyncCall();
