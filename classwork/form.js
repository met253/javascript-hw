const formRef = document.querySelector("[data-form]");
const inputLogin = document.querySelector("[data-login]")
const inputPassword = document.querySelector("[data-password]")
const inputCheckbox = document.querySelector("[data-checkbox]")

formRef.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (
      inputLogin.value === "" ||
      inputPassword.value === "" ||
      !inputCheckbox.checked
    ) {
      console.log("Вы не авторизовались");
      return;
    } else {
      console.log("Вы зарегестрировались");
      const login = inputLogin.value;
      console.log(login);
      const password = inputPassword.value;
      console.log(password);
    }
    evt.currentTarget.reset();
  });
  // formRef.reset()