function toUpperCase() {
    // Get the input element
    const inputElement = document.getElementById("fname");
    
    // Check if the input element exists and has a value
    if (inputElement && inputElement.value) {
        // Convert the value to uppercase
        inputElement.value = inputElement.value.toUpperCase();
    }
}

// Add an event listener to the input element to trigger the function
document.getElementById("fname").addEventListener("input", toUpperCase);