document.addEventListener("DOMContentLoaded", () => {
  const one = document.getElementById("one");
  const two = document.getElementById("two");
  const r = JSON.parse(localStorage.getItem("append")) || 1;
  if (1 == r) {
    one.style.display = "flex";
    two.style.display = "none";
  } else {
    one.style.display = "none";
    two.style.display = "flex";
  }
});

document.getElementById("form1").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("confirmPassword").value;
  const emailConfirm = document.getElementById("confirmEmail").value;
  const name = document.getElementById("name").value;

  if (email !== emailConfirm) {
    document.getElementById("answer").style.color = "red";
    document.getElementById("answer").innerHTML =
      "You're email doesnt match the confirmed one try again";
  }
  if (password !== passwordConfirm) {
    document.getElementById("answer").style.color = "red";
    document.getElementById("answer").innerHTML =
      "You're password doesnt match the confirmed one try again";
  }
  if (
    email &&
    password &&
    emailConfirm &&
    passwordConfirm &&
    name &&
    password === passwordConfirm &&
    email === emailConfirm
  ) {
    localStorage.setItem(
      "answer",
      JSON.stringify({ email: email, password: password })
    );
    appending(2);
    localStorage.setItem("append", "2");
    form.reset();
  }
});

const form = document.getElementById("form1");

form.addEventListener("input", () => {
  document.getElementById("submit").disabled = true;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("confirmPassword").value;
  const emailConfirm = document.getElementById("confirmEmail").value;
  const name = document.getElementById("name").value;
  if (email && password && emailConfirm && passwordConfirm && name) {
    document.getElementById("submit").disabled = false;
  }
});

document.getElementById("form2").addEventListener("submit", (event) => {
  event.preventDefault();
  const email2 = document.getElementById("email2").value || "";
  const password2 = document.getElementById("password2").value || "";

  let r = JSON.parse(localStorage.getItem("answer"));

  if (r == null) {
    document.getElementById("answer2").style.color = "red";
    document.getElementById("answer2").innerHTML = "You don't have an account!";
  }
  if (email2 !== r.email) {
    document.getElementById("answer2").style.color = "red";
    document.getElementById("answer2").innerHTML =
      "You're email doesnt match the confirmed one try again";
  }

  if (password2 != r.password) {
    document.getElementById("answer2").style.color = "red";
    document.getElementById("answer2").innerHTML =
      "You're pass doesnt match the confirmed one try again";
  }
  if (email2 && password2 && password2 === r.password && email2 === r.email) {
    document.getElementById("answer2").style.color = "green";
    document.getElementById("answer2").innerHTML =
      "Form Submitted Successfully";
    alert("Congrats you are logged in successfully!");
  }
});

document.getElementById("btn1").addEventListener("click", () => {
  appending(2);
  localStorage.setItem("append", "2");
});
document.getElementById("btn2").addEventListener("click", () => {
  appending(1);
  localStorage.setItem("append", "1");
});

const appending = (pageNumber) => {
  const one = document.getElementById("one");
  const two = document.getElementById("two");

  if (pageNumber == 1) {
    one.style.display = "flex";
    two.style.display = "none";
  } else if (pageNumber == 2) {
    one.style.display = "none";
    two.style.display = "flex";
  }
};
