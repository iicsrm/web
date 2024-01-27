document.addEventListener('DOMContentLoaded', () => {
    const slides = document.getElementById('imageSlide');
    slides.innerHTML = generateEvent();
});

const generateEvent = () =>{
    let result = '<div class="owl-carousel md:flex items-center">';
    for(let i=1; i<=14; i++){
        result += `<div class="item m-5"><img class="object-fill align-middle rounded-lg" src="./public/img/quizmantra/carousel/${i}.jpg" alt="Image ${i}"></div>`
    }
    result+=`</div>
    <div>
        <h1 class="text-center text-xl md:text-2xl my-5"> View the <a href="./event.html" class='font-bold underline underline-offset-8 cursor-pointer'>QuizMantra-24</a> highlights</h1>
    </div>
    `;
    return result;
    
}