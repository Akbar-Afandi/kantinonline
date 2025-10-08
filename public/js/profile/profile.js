const userBtn = document.getElementById("userBtn")
const userMenu = document.getElementById("userMenu")
const userName = document.getElementById("userName")
  
userBtn.addEventListener("click", () => {
  userMenu.classList.toggle("right-0")
})

document.addEventListener("click", (e) => {
  if(!userMenu.contains(e.target) && !userBtn.contains(e.target)) {
    userMenu.classList.remove("right-0")
  }
})

userName.innerHTML = `${loggedInUser}`