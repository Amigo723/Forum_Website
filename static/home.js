const searchbtn = document.querySelector(".bi");
const searchbar = document.querySelector(".search");
const body = document.querySelector("body");

searchbar.addEventListener("click",()=>{
    searchbar.style.width = "20rem";
})
body.addEventListener("click",()=>{
    searchbar.style.width = "15rem";
})