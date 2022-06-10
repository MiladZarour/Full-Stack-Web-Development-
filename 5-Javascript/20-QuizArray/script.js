var universities = [
    {
        name: " Aleppo ",
        hasGone: false,
        year: " 2010 "
    },
    {
        name: " MIT ",
        hasGone: true,
        year: " 205 "
    },
    {
        name: " OXFORD ",
        hasGone: true,
        year: " 1800 "
    },
];

universities.forEach(function (university) {
    if (university.hasGone === true) {
        console.log(university.name + university.year);
    }
    else {
        console.log(university.name);
    }
});