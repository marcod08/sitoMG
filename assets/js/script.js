let menuIcon = document.getElementById("menuIcon")
let menuList = document.getElementById("menuList")

menuIcon.addEventListener("click", ()=> {
    menuList.style.display = (menuList.style.display === "flex") ? "none" : "flex"
})