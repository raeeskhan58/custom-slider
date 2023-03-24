const slides = document.querySelectorAll('.slide');
// console.log(slide);
let counter = 0;
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
        // console.log(element,index);
        
    });

const goPrev = () => {
   if(counter==-0){
    counter--;
    slideImg();
    alert(' no more images click on next');
   }
   else{
    
    counter++;
    slideImg();
   }

}
const goNext = () => {
    if(counter==-9){
        counter++;
        slideImg();
        alert(' no more images click on prev')
    }
    else{
        counter--;
        slideImg();
    }
    
}
const slideImg = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${counter * 100}%)`
        console.log(counter);
    
       
    });
}