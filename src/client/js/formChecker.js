function checkForCity(city) {
    console.log("::: Running checkForCity :::", city);
    if (city.length == 0) {
        console.log("city empty");
        return false;
    };
    console.log('check true');
    return true;
};

function checkForDate(startDate, endDate) {
    console.log("::: Running checkForDate :::", startDate, endDate)
    const date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if(!startDate.match(date_regex) && !endDate.match(date_regex)) {
        console.log("date failed");
        return false;
    }
    console.log("date passed");
    return true;
};

export { checkForCity };
export { checkForDate };
