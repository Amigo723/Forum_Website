var about = document.getElementById('about-btn');
var que = document.getElementById('que-btn');
var ans = document.getElementById('ans-btn');
var about_con = document.querySelector('.table');
var que_con = document.querySelector('.question-box');
// var ask = document.querySelector('.table');

que.addEventListener("click",()=>{
    about_con.style.display="hidden";
    que_con.style.display="block";
    // ans_con.style.display="none";
})
ans.addEventListener("click",()=>{
    about_con.style.display="none";
    que_con.style.display="block";
    // ans_con.style.display="block";
})
