let email = document.getElementById("#email");
let password = document.getElementById("#password");
let form = document.getElementById("#validatorForm");
console.log(form);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailValid = emailRegex.test(email.value);
    let passwordValid = passwordRegex.test(password.value);

    if (!emailValid) {
        document.querySelector("#emailError").textContent = "Invalid email format.";
    }
    if (!passwordValid) {
        document.querySelector("#passwordError").textContent = "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
    }
    alert("Email and Password are valid!");
});
