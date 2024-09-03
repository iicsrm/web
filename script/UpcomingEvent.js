document.addEventListener('DOMContentLoaded', () => {
    const bodySection = document.getElementById('body-section');
    const tbody = document.getElementById('event-container');
    tbody.innerHTML = showEvent();
    // bodySection.innerHTML = generateEvent();
});

// const showEvent = () =>{
//     return `<div class="w-full px-12 py-4">
//         <!-- Upcoming Event Heading -->
//         <div class="text-center mb-6 bg-white p-6 rounded-lg shadow-lg bg-black">
//             <h1 class="text-3xl lg:text-5xl font-bold">TechFusion</h1>

//             <div class="flex items-center justify-between">
//                 <!-- Event Logo -->
//                 <div class="w-full lg:w-1/3 flex justify-center p-4">
//                     <div class="p-6">
//                         <img src="./public/img/TechFusion/TechFusion.jpeg" alt="Event Logo" class="w-full rounded-xl h-auto rounded-sm">
//                     </div>
//                 </div>
//                 <h1 class="text-center font-bold text-9xl md:text-3xl">TechFusion 06.09.2024</h1>
//                 <!-- Event QR -->
//                 <div class="w-full lg:w-1/3 p-4">
//                     <div class="p-6 mx-auto">
//                         <img src="./public/img/TechFusion/FormQr.png" alt="Event QR" class="size-2/3 h-auto rounded-xl border">
//                         <h1 class=" my-4 underline "><a class="font-semibold text-3xl" href="https://forms.gle/R2mB7gXWcPTa5Tg3A"> Register Now!</a></h1>
//                     </div>
//                 </div>
//             </div>
           
//         </div>
//     </div>`
// }

const showEvent = () =>{

    return `<div class="w-full px-6 py-4">
    <!-- Upcoming Event Heading -->
    <div class="bg-white p-6 rounded-lg shadow-lg text-center mb-6 bg-black">
        <h1 class="text-3xl lg:text-5xl font-bold mb-4">TechFusion</h1>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <!-- Event Logo -->
            <div class="p-4 flex justify-center">
                <img src="./public/img/TechFusion/TechFusion.jpeg" alt="Event Logo" class="w-full max-w-xs rounded-xl">
            </div>

            <!-- Event Date and Title -->
            <div class="text-center">
                <h2 class="text-3xl md:text-7xl font-bold text-gray-400 hidden md:block animate-pulse">TechFusion</h2>
                <p class="text-4xl text-gray-300 md:mt-2 font-medium">06.09.2024</p>
            </div>

            <!-- Event QR and Register Button -->
            <div class="p-4 flex flex-col items-center">
                <img src="./public/img/TechFusion/FormQr.png" alt="Event QR" class="w-2/3 h-auto rounded-xl">
                <a href="https://forms.gle/R2mB7gXWcPTa5Tg3A" class="mt-4 text-2xl font-light text-slate-500 underline">Register Now !</a>
            </div>
        </div>
    </div>
</div>`

}