const logoutBtn = document.getElementById("logoutBtn")

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser")
  window.location.reload()
})