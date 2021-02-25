"use strict";

const gitAPI = GITHUB_TOKEN;

// {
//
//     const wait = (n) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (typeof n === "number") {
//                     resolve(`You'll see this after ${n} milliseconds`);
//                 } else {
//                     reject(`Time has failed`);
//                 }
//             }, n);
//         });
//     }
//
//     wait("5000")
//         .then(console.log)
//         .catch(console.error);

    // wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    // wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// }

// {
//
//     fetch(`https://swapi.dev/api/people`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             const [{ name, height, mass, hair_color, gender  }] = data.results
//             document.write(`<p>${name}, ${height}, ${hair_color} </p>`);
//         })
//         .catch(console.error);
//
// }


/* TODO: make a GET request using fetch to the url below to get an array of five cat fact objects.
    Log the text property of the first cat fact object. Be sure to log possible errors in a catch.
 */

// {
//
//     const catFactsURL = 'https://cat-fact.herokuapp.com/facts';
//
//     fetch(catFactsURL)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             const [{ type, text }] = data
//             document.write(`<h1>${ type } : ${ text }</h1>`)
//         })
//         .catch(console.error);
//
// }


// -------- MINI EXERCISE 4
/* TODO: Create a new endpoint on https://hookbin.com/ and use fetch to send some POST requests.
    Experiment with sending different shapes of data in the body of the request.
*/

// {
//
//     // insert form inputs for dynamic post info (body object)
//
//     // function singAlong() {
//     //     return
//         document.write(`
//         <div>
//         <div><input id="username" type="text" maxlength="15" placeholder="username"></div>
//         <div><input id="password" type="password" maxlength="19" placeholder="password"></div>
//         <div><button id="user-login">Login</button></div>
//         </div>`);
//     // }
//
//     const btn = $("#user-login");
//
//     btn.click( () => {
//         const username = $("#username").keyup().val();
//         console.log(username);
//         const password = $("#password").keyup().val();
//         console.log(password);
//         const config = {
//         method: `POST`,
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//             username,
//             password,
//             age: 23,
//             education: "BFA - Photography",
//             occupation: "Entrepreneur, influencer, and personal trainer"
//         })
//     }
//
//         fetch("https://hookb.in/mZRnr2yP18Heqq710d9Z", config)
//             .then(console.log)
//             .catch(console.error);
//     })
//
// }

{
    document.write(`
        <h1>Git user info:</h1>
        <div>
        <div><input id="username" type="text" maxlength="17" placeholder="username"></div>
        <div><button id="user-login">Login</button></div>
        </div>`);

    const btn = $("#user-login");
    const username = $("#username").val();
    console.log(username)

    btn.click(() => {
        const username = $("#username").val();
        console.log(username);
        let URL = `https://api.github.com/users/${username}/events/public`;
        const CONFIG = {
            headers: {
                'Authorization': `token ${gitAPI}`
            }
        }
        function userNamePush() {
            return new Promise((resolve, reject) => {
                resolve(fetch(URL, CONFIG)
                    .then(response => response.json())
                    // .then(data => {
                    //     console.log(data);
                    //     console.log(new Date(data[0].created_at).toDateString())
                    // })
                    .then(data => {
                        let mostRecentEvent = data.filter((data) => data.type === "PushEvent");
                        console.log(mostRecentEvent);
                        let dateOfMostRecent = new Date(mostRecentEvent[0].created_at).toDateString();
                        console.log(dateOfMostRecent);
                        return dateOfMostRecent;
                    })
                    .catch(console.error));
            })
        }

        userNamePush();


    })
}


// {
//     const song = document.getElementById('song');
//
//     // A Song from Callback Hell...
//
//     function singLyrics(lyrics, pitch, callback) {
//         var lyric = new SpeechSynthesisUtterance(lyrics);
//         lyric.pitch = pitch;
//         lyric.rate = .7;
//         speechSynthesis.speak(lyric);
//         song.append(lyrics);
//         setTimeout(callback, 1000);
//     }
//
//     const sing = () => {
//         song.innerHTML = '';
//         singLyrics('All a-', .5, function() {
//             singLyrics('round the', 1, function() {
//                 singLyrics(' mulberry', 1.5, function() {
//                     singLyrics(' bush', 1, function() {
//                         singLyrics(' the monkey', .5, function() {
//                             singLyrics(' chased', 1, function() {
//                                 singLyrics(' the wea-', 1.5, function() {
//                                     singLyrics(' sel', 1, function() {
//                                         return false;
//                                     });
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     };

// A Simpler Song to Read (I promise)... but still sung terribly...

// function singLyrics(lyrics, pitch) {
//     return new Promise((res) => {
//         var lyric = new SpeechSynthesisUtterance(lyrics);
//         lyric.pitch = pitch;
//         lyric.rate = .7;
//         speechSynthesis.speak(lyric);
//         song.append(lyrics);
//         setTimeout(res, 1500);
//     });
// }
//
// const singPromises = () => {
//     song.innerHTML = '';
//     return singLyrics('All a-', .5)
//         .then(() => singLyrics('round the', 1))
//         .then(() => singLyrics(' mulberry', 1.5))
//         .then(() => singLyrics(' bush', 1))
//         .then(() => singLyrics(' the monkey', .5))
//         .then(() => singLyrics(' chased', 1))
//         .then(() => singLyrics(' the wea-', 1.5))
//         .then(() => singLyrics(' sel', 1));
// };
//
//     document.getElementById('sing-btn').addEventListener('click', sing);
//
// }