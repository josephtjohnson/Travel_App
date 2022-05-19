function checkForCity(city) {
    console.log("::: Running checkForCity :::", city);
    if (city == null) {
        alert('City cannot be blank');
        return false;
    }

    return true;
};

export { checkForCity };
