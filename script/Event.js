document.addEventListener('DOMContentLoaded', () => {
    const bodySection = document.getElementById('body-section');
    bodySection.innerHTML = generateEvent();
});

const generateEvent = () =>{
    return `
    <div class="block md:grid grid-cols-3 items-center gap-12">
        <video width="640" height="360" controls autoplay loop class="h-64 w-64 md:h-72 md:w-72 rounded-lg mx-auto shadow-lg shadow-black">
            <source src="./public/quizmantra.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="text-center my-10">
            <h1 class="text-4xl md:text-6xl font-bold mb-4 ">Join Us for an Exciting Event!</h1>
            <p class="text-lg md:text-xl mb-8">Be part of something amazing.</p>
            <a href="https://forms.gle/HJWj87pykjT1fNwq7" target="_blank" class="cursor-pointer bg-blue-700 text-white text-3xl font-medium p-4 rounded-full text-xl">Register Now !</a>
        </div>
        <img src="./public/img/qr.jpg" alt="qr" srcset="" class="h-48 w-48 md:h-72 md:w-72 rounded-lg mx-auto shadow-lg shadow-black">
    </div>`
}