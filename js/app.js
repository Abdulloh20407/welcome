let elForm = document.querySelector(".form");

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  
  let data = {
    login: evt.target[0].value,
    password: evt.target[1].value
  };

  JSON.stringify(window.localStorage.setItem("login", data.login));
  JSON.stringify(window.localStorage.setItem("password", data.password))
  
  elForm.innerHTML = `
    <img class="mx-auto" src="./images/loading.svg" alt="loading-icon" width="240" height="240"/>
  `;
  
  setTimeout(() => {
    window.location = "login.html";
  }, 1000);

});


