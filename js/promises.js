"use strict";

function wait(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof n === "number") {
                resolve(`You'll see this after ${n} milliseconds`);
            } else {
                reject(`Time has failed`);
            }
        }, n );
    });
}


wait("5000")
    .then(console.log)
    .catch(console.error);