document.addEventListener("DOMContentLoaded", function() {
const btnAboutme = document.getElementById('btn-aboutme');
const divAboutme = document.getElementById('info');
 const darkModeBtn = document.getElementById('toggle-darkmode');
btnAboutme.addEventListener('click',function() {
 if(divAboutme.classList.contains('hide')) {
 divAboutme.classList.remove('hide');
  btnAboutme.textContent = "Show less";
 } else {
 divAboutme.classList.add('hide');
 btnAboutme.textContent = "About Me";
 }
});


darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  darkModeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "Toggle light mode"
    : "Toggle dark mode";
});
});