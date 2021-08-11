const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const h1 = document.querySelector("#greeting");
const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";
function sayHello(name) {
    loginForm.classList.add(HIDDEN_CLASS);
    h1.innerText = `Hello ${name}`;
    h1.classList.remove(HIDDEN_CLASS);
}
function handle(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    sayHello(username);
}
loginForm.classList.add(HIDDEN_CLASS);
const savedName = localStorage.getItem(USERNAME_KEY);
if (savedName === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
} else {
    sayHello(savedName);
}

loginForm.addEventListener("submit", handle);
