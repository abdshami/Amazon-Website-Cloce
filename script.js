let imgBox = document.querySelector('.large_product_image>img')
let link = document.querySelectorAll(".box a")


link.forEach(el => {
    el.addEventListener('mouseover',(e)=> imgBox.src = el.href);
});




let thumbnails = document.getElementsByClassName("thumbnail")
let slider = document.getElementById("slider")
let buttonRight = document.getElementById("slide_right")
let buttonLeft = document.getElementById("slide_left")


buttonLeft.addEventListener('click',()=>{
     slider.scrollLeft -= 125;
     
})

buttonRight.addEventListener('click',()=>{
    slider.scrollLeft += 125;
})


const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

function autoPlay(){
    if(slider.maxScrollLeft > maxScrollLeft -1){
        slider.scrollLeft -= maxScrollLeft;
    }else{
        slider.scrollLeft += 1;
    }
}

let play = setInterval(autoPlay, 50);

for(let i=0 ; i<thumbnails.length ; i++){
    thumbnails[i].addEventListener('mouseover',()=>{
              clearInterval(play);
    })

    thumbnails[i].addEventListener('mouseout',()=>{
        return play =setInterval(autoPlay,50) 
})
}


    
