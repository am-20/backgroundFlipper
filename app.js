const colors = ["#fffcf9", "#8BBD89", 
"#9C89A9", "#E27A78", "#DB9065"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function() {
    const randomNum = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
    console.log(randomNum);
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}