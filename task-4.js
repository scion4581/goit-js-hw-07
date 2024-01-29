'use strict';

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();
    if (email.length === 0 || password.length === 0) {
        alert("All form fields must be filled in");    
    } else {
        console.log({
            "email": email,
            "password": password
        });
        event.target.reset();
    }
})
