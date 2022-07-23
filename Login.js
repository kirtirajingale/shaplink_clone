let form = document.querySelector("form");

  let signupArr = JSON.parse(localStorage.getItem("signupData")) || [];

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let obj = {
      email: form.email.value,
      password: form.password.value,
    };
    let flag = false;
    signupArr.forEach(function (el) {
      if (el.email === obj.email && el.password === obj.password) {
        flag = true;
        localStorage.setItem("LoginData", JSON.stringify(el));
        alert("Login Successful");
        window.location.href = "index.html";
      }
    });
    if (flag == false) {
      alert("User Doesn't Exist");
    }
  });