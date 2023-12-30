document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = generateFooter();
    document.body.appendChild(footerContainer);
});

const generateFooter = () => {
    return `
    <footer class="bg-gray-900 text-white text-center py-3 mt-auto ">
        &copy; 2023 IIC-SRMIST Delhi-NCR. All rights reserved.
    </footer>`;
}