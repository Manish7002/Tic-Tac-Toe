let msgpopup = document.querySelector(".msgpopup");
const signbtn = document.querySelector(".signinbtn");
const msgbtn = document.querySelector(".msgbtn");
const msg = document.querySelector(".msg");

function getInfo() {
  const userName = document.querySelector(".email").value;
  const password = document.querySelector(".pass").value;
  console.log("Email = ", userName);
  console.log("Password = ", password);
}

signbtn.addEventListener("click", () => {
  msgpopup.classList.remove("hide");
  getInfo();
});

function tryAgain() {
  msgbtn.addEventListener("click", () => {
    msgpopup.classList.add("hide");
  });
}

msgbtn.addEventListener("click", () => {
  if (email !== "" && pass !== "") {
    msgpopup.classList.add("hide");
    window.location.href = "https://evertrustbymanish.netlify.app/";
  } else {
    msg.innerText = "Error, Username or Password is invalid";
    msgbtn.innerText = "try again !";
    tryAgain();
  }
});
