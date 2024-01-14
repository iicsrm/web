let memberContainer = document.querySelector('#member-container');

    fetch('./member.json')
    .then(response => response.json())
    .then(memberData => {

      // Generate and append cards to the container
      memberData.forEach((person) => {
        let cardHTML = showMemberCard(person);
        memberContainer.innerHTML += cardHTML;
      });
    })
    .catch(error => console.error('Error fetching data:', error));


const showMemberCard = (data) =>{
    return `<div id='member-card' class="rounded-lg overflow-hidden w-64 mb-8 bg-gray-200 shadow-sm shadow-slate-800">
            <img src="./public/img/members/${data.imgSrc}" class="mx-auto my-auto h-40 rounded-full mb-2 mt-2 member-img" alt="Person Image" loading="lazy">
            <div class="px-6 py-4 bg-gray-900 text-gray-200">
                <h5 class="text-2xl font-bold mb-2 whitespace-nowrap">${data.name}</h5>
                <p class="text-md">${data.pos}</p>
                <div class="mt-4 flex space-x-5 justify-center">
                    <a href="${data.linkedin}" target="_blank" class="text-2xl"><i class="fab fa-linkedin"></i></a>
                    <a href="${data.github}" target="_blank" class="text-2xl"><i class="fab fa-github"></i></a>
                    <a href="${data.twitter}" target="_blank" class="text-2xl"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>`
}