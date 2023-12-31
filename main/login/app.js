const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const login_btn = document.querySelector("#Login-btn");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});
login_btn.addEventListener('click',() =>{
    console.log("hello world")
})

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});
