document.addEventListener('DOMContentLoaded', () => {
    const bodySection = document.getElementById('body-section');
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = generateEvent();
    // bodySection.innerHTML = generateEvent();
});


const data = [
    {
        Rank: 1,
        Team: "THE SQUAD",
        Entitled: "Winner 🏆"
    },
    {
        Rank: 2,
        Team: "THINKALOT",
        Entitled: "Second 🏆"
    },
    {
        Rank: 3,
        Team: "BRIGHTWORLD",
        Entitled: "Runner Up"
    },
    {
        Rank: 4,
        Team: "TAURUS",
        Entitled: "Runner Up"
    },
    {
        Rank: 5,
        Team: "MASTERS",
        Entitled: "Runner Up"
    },
    {
        Rank: 6,
        Team: "CTRL ALT ELITE",
        Entitled: "Runner Up"
    },
    {
        Rank: 7,
        Team: "NRRK",
        Entitled: "Runner Up"
    },
    {
        Rank: 8,
        Team: "INFINITY",
        Entitled: "Runner Up"
    },
    {
        Rank: 9,
        Team: "DESK CHAMPIONS",
        Entitled: "Runner Up"
    },
    {
        Rank: 10,
        Team: "JUSTICE LEAGUE",
        Entitled: "Runner Up"
    },
    {
        Rank: 11,
        Team: "SHERLOCK HOLMES",
        Entitled: "Runner Up"
    }
]

const generateEvent = () => {
    let result = ''
    data.forEach(element => {
    result += `
    <tr class="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700 text-orange-200">
        <th scope="row" class="md:py-4 py-3 text-white">
            ${element.Rank}
        </th>
        <td class="md:py-4 py-3">
            ${element.Team}
        </td>
        <td class="md:py-4 py-3 px-2">
            ${element.Entitled}
        </td>
    </tr>
    `});
    return result;
}
