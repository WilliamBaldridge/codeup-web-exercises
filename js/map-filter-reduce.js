"use strict";


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

{
    let trilingual = users.filter(languageFilter);

    console.log(trilingual);
}

{
    let emails = users.map(emailList);

    console.log(emails);
}

{
    let totalExp = users.map(experienceFilter).reduce(reductionCallback, 0);

    console.log(totalExp);

    let averageExp = totalExp / users.length;

    console.log(averageExp);
}

{
    let longestEmail = users.reduce(emailLength);

    console.log(longestEmail);
}

{
    let userNames = users.reduce(function (accumulator, currentValue) {
        return accumulator + ", " + currentValue.name;
    }, []);

    console.log(userNames);
}


{

    function emailList(user) {
        return user.email.split(" ");
    }

    function experienceFilter(yearsExp) {
        return yearsExp.yearsOfExperience;
    }

    function reductionCallback(accumulator, currentValue) {
        return accumulator + currentValue;
    }

    function emailLength(accumulator, currentValue) {
        if (accumulator.email.length > currentValue.email.length) {
            return accumulator.email;
        } else {
            return currentValue;
        }
    }

    function listOfNames(user) {
        return user.name
    }
}


