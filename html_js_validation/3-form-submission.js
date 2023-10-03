// retrieve form fields values
const form = document.getElementById('submitForm');
const errorMsg = document.getElementById('error');

//function to handle form submit
function handleFormSubmit(event) {
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    if (nameValue === "" || emailValue === "") {
        errorMsg.innerHTML = 'Please fill in all required fields';
        event.preventDefault();
    } else{
        errorMsg.innerHTML = 'Form submitted succesfully';
    }
}

//add event listener to form element
form.addEventListener('submit', (event) => {
    handleFormSubmit(event);
})