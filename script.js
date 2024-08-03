document.getElementById("myForm").addEventListener("submit", function(event) {
    let firstName = document.getElementById("firstname").value.trim();
    let lastName = document.getElementById("lastname").value.trim();
    let fNameError = document.getElementById("fname-error");
    let lNameError = document.getElementById("lname-error");
    let hasError = false;
    
    // Clear previous error messages and styles
    fNameError.textContent = "";
    lNameError.textContent = "";
    firstName.classList.remove("error-border");
    lastName.classList.remove("error-border");

    if (firstName === "") {
        event.preventDefault();
        fNameError.textContent = "This field is required.";
        firstName.classList.add("error-border");
        hasError = true;
    }

    if (lastName === "") {
        event.preventDefault();
        lNameError.textContent = "This field is required.";
        lastName.classList.add("error-border");
        hasError = true;
    }

    if (hasError) {
        event.preventDefault();
    }
});
