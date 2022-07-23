let form = document.querySelector("form");

  let signupArr = JSON.parse(localStorage.getItem("signupData")) || [];

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let obj = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    };
    //console.log(obj)
    if (obj.name == "" || obj.email == "" || obj.password == "") {
      alert("Please Enter required input to proceed further");
      return;
    } else {
      signupArr.push(obj);
      localStorage.setItem("signupData", JSON.stringify(signupArr));
      window.location.href ="Login.html"
    }
  });