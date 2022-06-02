function checkForCity(city) {
    console.log("::: Running City Validation :::");
    if (city.length == 0) {
        return false;
    }
    return true;
};

function checkForDate(startDate, endDate) {
    console.log("::: Running Date Validation :::")
    const date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if(!startDate.match(date_regex) || !endDate.match(date_regex)) {
        return false;
    }
    return true;
};

function chronos(startDate, endDate) {
    console.log("::: Running Chronological Validation :::")
    if(startDate > endDate) {
        return false;
    }
    return true;
};

export { checkForCity };
export { checkForDate };
export { chronos };
