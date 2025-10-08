const loggedInUser = localStorage.getItem("loggedInUser")

if(!loggedInUser) {
  window.location.href = "index.html"
}