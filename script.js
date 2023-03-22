const togglePassword = document.querySelector('#togglePassword');
const togglePassword2 = document.querySelector('#togglePassword2');
const password = document.querySelector('#psw');
const confirmPassword = document.querySelector("#confirmpsw")
let psw = document.querySelector('#psw').value;
let confirmPsw = document.querySelector("#confirmpsw")

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

togglePassword2.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPassword.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

