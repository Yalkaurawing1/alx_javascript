//get select element and div element
const selectEl = document.getElementById('numFields');
const container = document.getElementById('inputContainer');



//function to generate selected value input fields
function generateInputFields (selectValue) {
    container.innerHTML = ""; // clear exixting fields when function is called

    //loop through the selected number to create fields
    for (let i = 1; i <= selectValue; i++) {
        const inputField = document.createElement('input');
        inputField.setAttribute('name', 'field'+i);
        inputField.setAttribute('type', 'text');
        inputField.setAttribute('id', 'field'+i);
        container.appendChild(inputField);
    }
}

//add event listener to select element and call function
selectEl.addEventListener('change', function () {
    const selectValue = document.getElementById('numFields').value;
    generateInputFields(selectValue);
})


// a function to validate the input fields before submission
function validateForm () {
    const inputField = document.getElementsByTagName('input');//all input elements as HTML collection
    for (let i = 0; i < inputField.length; i++) {
        if (inputField[i].value == "") {
            const errorMsg = document.getElementById('error');
            errorMsg.innerHTML = 'Please fill in all fields';
            return false;
        }
    }
    return true;
}

//add event listener on submission
const form = document.getElementById('dynamicForm');
form.addEventListener('submit', (e) => {
    if (!validateForm()) {
        e.preventDefault();
    }
})
