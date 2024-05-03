// Image Slider
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let imageContainer = document.querySelector(".image-slider");
let allImgs = document.querySelectorAll(".image-slider img");
let currentimg = 1;
let timeout;


next.addEventListener("click", function () {
    currentimg++;
    updateimg(currentimg);
    clearTimeout(timeout);
})
prev.addEventListener("click", () => {
    currentimg--;
    updateimg();
    clearTimeout(timeout);
})

updateimg();

function updateimg() {
    if (currentimg > allImgs.length) {
        currentimg = 1;
    }
    else if (currentimg < 1) {
        currentimg = allImgs.length;
    }

    timeout = setTimeout(() => {
        updateimg();
        currentimg++;
    }, 3000)

    imageContainer.style.transform = `translateX(-${500 * (currentimg - 1)}px)`;
}


//  Auto Text Animation 

const container1 = document.querySelector(".auto-text-animation h1");
const careers = ["Welcoming 😊","Secure 🙌","Trustworthy ✌️","Inviting 🤞","Approachable 🤗","Reliable 💕"];
let careerIndex = 0

let charcterIndex = 0;

setInterval(()=>{
    charcterIndex++;
    // console.log(charcterIndex);
    updateText();
    if(charcterIndex > careers[careerIndex].length){
        charcterIndex = 0
        careerIndex++
    }
    if(careerIndex > careers.length-1){
        careerIndex = 0;
    }
},500)
    
function updateText(){
    container1.innerHTML = `<h2>Me Jyotipriya & My Site Is ${careers[careerIndex].slice(0,charcterIndex)}</h2>` 
}

// Mouse Pointer

var head_container = document.querySelector(".head-container");
var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove",function(event){
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Get the scroll position of the page
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;

    // Update the position of the follower element with respect to the scroll position
    cursor.style.opacity = 1;
    cursor.style.left = mouseX + scrollX + 'px';
    cursor.style.top = mouseY + scrollY + 'px';
})
document.addEventListener("mouseleave",function(){
    cursor.style.opacity = 0;
 });

// small video cursor
let small_video = document.querySelectorAll(".small-vedio video");
let small_video_cursor = document.querySelector(".new-cursor");
 for(el of small_video){
    el.addEventListener("mousemove",(event)=>{

        setTimeout(()=>{
            small_video_cursor.style.height = "80px";
            small_video_cursor.style.width = "80px";
        },300);
        
        const mouseX = event.clientX;
        const mouseY = event.clientY;
    
        // Get the scroll position of the page
        const scrollX = window.pageXOffset;
        const scrollY = window.pageYOffset;

        small_video_cursor.style.opacity = 1;
        cursor.style.opacity = 0;
        small_video_cursor.style.left = mouseX + scrollX + 'px';
        small_video_cursor.style.top = mouseY + scrollY + 'px';
    })
 }
 for(el of small_video){
    el.addEventListener("mouseleave",function(){
        setTimeout(()=>{
            small_video_cursor.style.height = "10px";
            small_video_cursor.style.width = "10px";
            small_video_cursor.style.transition = "all linear 0.20s"
        },200);
        small_video_cursor.style.opacity = 0;
     });
    
 }

// Scroll Event 
window.addEventListener("scroll",(e)=>{
    // console.log(window.scrollY);
})

// Uparrow
function scrollTop(){
    document.documentElement.scrollTop = 0;
}
var upArr = document.querySelector(".uparrow");
upArr.addEventListener("click",()=>{
    scrollTop();
})

// Responsiveness
let nav_symbol = document.querySelector(".features i");
let responsive_feature = document.querySelector(".responsive-features");
let cross = document.querySelector(".cross");
let bottom_main = document.querySelector(".buttom-main");
cross.addEventListener("click",()=>{
    responsive_feature.style.display = "none";
    bottom_main.style.display = "flex"
}) 
nav_symbol.addEventListener("click",()=>{
    responsive_feature.style.display = "flex"
    bottom_main.style.display = "none"
})