const navBtn = document.getElementById("navBtn");
const navMobile = document.getElementById("navMobile");

navBtn.addEventListener("click", () => {
    if (navMobile.style.display === "flex") {
        navMobile.style.display = "none";
        navBtn.style.transform = 'rotate(0deg)';
    } else if (navMobile.style.display === "none") {
        navMobile.style.display = "flex";
        navBtn.style.transform = 'rotate(90deg)';
    }
})