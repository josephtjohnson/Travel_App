import { handleSubmit } from  './js/formHandler.js';
import { clearForm } from  './js/formHandler.js';
import { checkForCity } from  './js/formChecker.js';
import { checkForDate } from  './js/formChecker.js';
import { chronos } from  './js/formChecker.js';

import './styles/style.scss';

//add event listener and then add method to update UI
//document.querySelector('button[type=Add]').addEventListener("click", handleSubmit);
document.addEventListener('DOMContentLoaded', () => {
    const button_add = document.querySelector('button[type=Add]');
    button_add.addEventListener("click", handleSubmit, false);
});
//document.querySelector('button[type=Remove]').addEventListener("click", clearForm);
document.addEventListener('DOMContentLoaded', () => {
    const button_remove = document.querySelector('button[type=Remove]');
    button_remove.addEventListener("click", clearForm, false);
});

export { handleSubmit};
export { clearForm };
export { checkForCity };
export { checkForDate };
export { chronos };
