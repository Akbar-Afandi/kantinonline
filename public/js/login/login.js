const form = document.getElementById("form")
const usnInput = document.getElementById("usn")
const passInput = document.getElementById("pass")

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const username = usnInput.value.trim()
  const password = passInput.value.trim()
  
  localStorage.setItem("loggedInUser", username)
  
  window.location.href = "beranda.html"
})

if(localStorage.getItem("loggedInUser")) {
  window.location.href = "beranda.html"
}