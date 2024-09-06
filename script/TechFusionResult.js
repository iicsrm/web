document.addEventListener('DOMContentLoaded', () => {
    const bodySection = document.getElementById('body-section');
    const tbody = document.getElementById('event-container');
    tbody.innerHTML = showEvent();
    // bodySection.innerHTML = generateEvent();
});


const showEvent = () =>{

    return `<div class="w-full px-6 py-4">
    <!-- Header Section -->
    <div class="bg-white p-6 rounded-lg shadow-lg text-center mb-6 bg-black text-white">
        <h1 class="text-3xl lg:text-5xl font-bold mb-4">TechFusion Results</h1>
    </div>
    <div class="md:flex justify-around">
    <!-- Techcanvas Results Table -->
    <div class="bg-white p-6 rounded-lg shadow-lg mb-6 ">
        <h2 class="text-2xl lg:text-3xl font-semibold mb-4 text-center">TechCanvas</h2>
        <table class="min-w-1/2 bg-white border-collapse mx-auto">
            <thead>
                <tr>
                    <th class="py-3 px-6 bg-black text-white text-left">Rank</th>
                    <th class="py-3 px-6 bg-black text-white text-left">Name</th>
                    <th class="py-3 px-6 bg-black text-white text-left">Winning Title</th>
                </tr>
            </thead>
            <tbody>
                <tr class="hover:bg-gray-200">
                    <td class="py-3 px-6 border-b border-gray-200">1</td>
                    <td class="py-3 px-6 border-b border-gray-200">Keshav Aggarwal</td>
                    <td class="py-3 px-6 border-b border-gray-200">First 🥇</td>
                </tr>
                <tr class="hover:bg-gray-200">
                    <td class="py-3 px-6 border-b border-gray-200">2</td>
                    <td class="py-3 px-6 border-b border-gray-200">Aditi Arya</td>
                    <td class="py-3 px-6 border-b border-gray-200">Second 🥈</td>
                </tr>
                <tr class="hover:bg-gray-200">
                    <td class="py-3 px-6 border-b border-gray-200">3</td>
                    <td class="py-3 px-6 border-b border-gray-200">Ashmit Deshwal</td>
                    <td class="py-3 px-6 border-b border-gray-200">Third  🥉</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- PresenTech Results Table -->
    <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl lg:text-3xl font-semibold mb-4 text-center">PresenTech</h2>
        <table class="min-w-1/2 bg-white border-collapse mx-auto">
            <thead>
                <tr>
                    <th class="py-3 px-6 bg-black text-white text-left">Rank</th>
                    <th class="py-3 px-6 bg-black text-white text-left">Name</th>
                    <th class="py-3 px-6 bg-black text-white text-left">Winning Title</th>
                </tr>
            </thead>
            <tbody>
                <tr class="hover:bg-gray-200">
                    <td class="py-3 px-6 border-b border-gray-200">1</td>
                    <td class="py-3 px-6 border-b border-gray-200">Ishant Singh</td>
                    <td class="py-3 px-6 border-b border-gray-200">First 🥇</td>
                </tr>
                <tr class="hover:bg-gray-200">
                    <td class="py-3 px-6 border-b border-gray-200">2</td>
                    <td class="py-3 px-6 border-b border-gray-200">Ashwini Kumar Singh</td>
                    <td class="py-3 px-6 border-b border-gray-200">Second 🥈</td>
                </tr>
                <tr class="hover:bg-gray-200">
                    <td class="py-3 px-6 border-b border-gray-200">3</td>
                    <td class="py-3 px-6 border-b border-gray-200">Aditya Singh</td>
                    <td class="py-3 px-6 border-b border-gray-200">Third 🥉</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</div>
`

}