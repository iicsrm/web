let teamContainer = document.querySelector('#team-container');

    fetch('./team.json')
    .then(response => response.json())
    .then(teamData => {

      // Generate and append cards to the container
      teamData.forEach((team) => {
        let cardHTML = showTeamCard(team);
        teamContainer.innerHTML += cardHTML;
      });
    })
    .catch(error => console.error('Error fetching data:', error));

const showTeamCard = (data) =>{
  return `
  <div class="bg-${data.color}-500 rounded-lg overflow-hidden w-64 mb-8">
    <img src="${data.imgSrc}" class="mx-auto my-auto h-40 w-40 rounded-full mb-2 mt-2" alt="Team Image">
    <div class="px-6 py-4 bg-gray-900 text-gray-200">
        <h5 class="text-2xl font-bold mb-2">${data.name}</h5>
        <p class="text-sm">
            ${data.about}
        </p>
    </div>
  </div>`
}