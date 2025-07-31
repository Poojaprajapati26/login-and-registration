const wrapper = document.querySelector('.wrapper');
const loginlink= document.querySelector('.login-link');
const  registerlink= document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose= document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});
loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});
function checkStrength() {
  const password = document.getElementById("password").value;
  const strengthText = document.getElementById("strengthIndicator");

  let strength = "Weak";
  let color = "red";

  const strongPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
  const mediumPattern = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{6,})");

  if (strongPattern.test(password)) {
    strength = "Strong";
    color = "green";
  } else if (mediumPattern.test(password)) {
    strength = "Medium";
    color = "orange";
  }

  strengthText.textContent = `Strength: ${strength}`;
  strengthText.style.color = color;
}