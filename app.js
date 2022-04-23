const form = document.querySelector("form");
const input_el = document.querySelector("input");

form.addEventListener("submit", (e) => {
  if (validateEmail(input_el.value)) {
    showAlert("green", "Email type is valid!");
    form.reset();
  } else {
    showAlert("red", "Email type is unvalid!");
    showIcon();
   
  }

  e.preventDefault();
});

function validateEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  input_el.style.borderColor = type;
  form.appendChild(alert);

 

  setTimeout(() => {
    alert.remove();
    
  }, 1500);
}

function showIcon(){

    const icon = document.createElement("i");
    icon.className = "fa-solid fa-exclamation";
    form.appendChild(icon);
    setTimeout(() => {
        icon.remove();
    }, 1500);
}
