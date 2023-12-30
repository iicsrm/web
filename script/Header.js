const generateHeader = () => {
    return `
    <header class="text-center py-8 flex justify-around content-start flex-col lg:flex-row">
            <a href="./index.html"><img src="./public/img/srm-logo.png" alt="Club Logo" class="mx-auto max-w-xs"></a>
            <div class="mr-8 text-center hidden lg:block">
                <h1 class="mt-6 text-3xl font-bold">IIC - Institutional Innovation Council</h1>
                <p class="mt-1 text-xl my-4">Department of Computer Applications</p>
            </div>
            <a href="https://www.srmup.in/"><img id="club-logo" src="./public/img/iic-logo.png" alt="Club Logo" class="mx-auto h-32 w-32 max-w-xs mt-6 lg:mt-0"></a>
            <div class="text-center block lg:hidden">
                <h1 class="mt-6 text-3xl font-bold">IIC - Institutional Innovation Council</h1>
                <p class="mt-1 text-xl my-4">Department of Computer Applications</p>
            </div>
    </header>

    <nav class="bg-yellow-300 p-4 flex justify-evenly text-lg font-medium">
        <a class="mx-4" href=""./index.html>Home</a>
        <a class="mx-4" href="./teams.html">Teams</a>
        <a class="mx-4" href="./members.html">Members</a>
        <a class="mx-4" href="#">Contact</a>
    </nav>`
}

const headerContainer = document.createElement('div');
headerContainer.innerHTML = generateHeader();
document.body.appendChild(headerContainer);