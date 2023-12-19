/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve("waiting 1sec")},t*1000)
    })
}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve("waiting 2sec")},t*1000)
    })
}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve("waiting 3sec")},t*1000)
    })
}

function calculateTime(t1, t2, t3) {
    let s1=Date.now();
    wait1(t1).then((data)=>{
        let e1=Date.now();
        console.log(e1-s1);
        console.log(data);
    })

    let s2=Date.now();
    wait2(t2).then((data)=>{
        let e1=Date.now();
        console.log(e1-s2);
        console.log(data);
    })

    let s3=Date.now();
    wait3(t3).then((data)=>{
        let e1=Date.now();
        console.log(e1-s3);
        console.log(data);
    })
}

calculateTime(6,2,4);