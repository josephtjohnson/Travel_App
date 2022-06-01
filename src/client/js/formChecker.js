function checkForCity(city) {
    console.log("::: Running checkForCity :::", city);
    if (city == null) {
        alert('City cannot be blank');
        return false;
    }

    return true;
};

function checkForDate(startDate, endDate) {
    console.log("::: Running checkForDate :::", startDate, endDate)
    const date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (startDate == null || endDate == null) {
        alert('Please input a date');
        return false;
    }
    else if(!startDate.match(date_regex) && !endDate.match(date_regex)) {
        alert('Please input a date with formt MM/DD/YYYY')
        return false;
    }

    return true;
};

export { checkForCity };
export { checkForDate };
