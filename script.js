const slides = document.querySelectorAll(".slide");
const prevBtn=document.querySelector(".prev");
const nextBtn=document.querySelector(".next");
let counter = 0;

nextBtn.addEventListener("click",()=>{
    if (counter==3) {
        nextBtn.classList.add("disabled")
    } else {
        counter++;
        prevBtn.classList.remove("disabled")
    }
    console.log(counter)
    slideImage()
})
prevBtn.addEventListener("click",()=>{
    if (counter==0) {
        prevBtn.classList.add("disabled")
    } else {
        counter--;
        nextBtn.classList.remove("disabled")
    }
    slideImage()
})

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

const slideImage = () => {
    slides.forEach((slide) => {
        
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}
