var achens = [
    {
        name: "Rev. Dr. Itty Mathews",
        denomination: "CSI",
        description: "Vicar of Church of South India Detroit, MI",
        image: "itty-mathews.webp",
        email: ""
    },
    {
        name: "Rev. Varghese Padiara Joseph",
        denomination: "CSI",
        description: "Vicar of Church of South India Congregation of Great Lakes, MI",
        image: "",
        email: ""
    },
    {
        name: "Rev. Fr. Movin Varghese",
        denomination: "Jacobite",
        description: "Vicar of St. Mary's Syrian Orthodox Church, MI",
        image: "movin-varghese.webp",
        email: ""
    },
    {
        name: "Rev. Kurien Jose",
        denomination: "Mar Thoma",
        description: "Vicar of St. Thomas Mar Thoma Church, IN",
        image: "",
        email: ""
    }
];

// HTML string to hold the generated content
var achensHTML = ``;

// Generating HTML for each achen
achens.forEach(function(achen) {
    achensHTML += `
    <div class='card m-3 shadow' style='width: 25rem;'>
    <img oncontextmenu="return false;" onerror="if (this.src != '/images/compressed/achens/${achen.image}') this.src = '/images/original/contactus/placeholder.png';" loading="lazy" src='/images/compressed/achens/${achen.image}' class='mt-3 rounded w-100 h-100' alt='${achen.name}' style='object-fit: cover;'>
    <div class="card-body">
        <h5 class="card-title">${achen.name}</h5>
        <p class="card-text text-secondary">${achen.denomination}</p>
        <p class="card-text">${achen.description}</p>
    </div>
    </div>
    `;
});

// Closing tag for container div
achensHTML += `</div>`;

// Displaying generated HTML for achens
document.getElementById("achensContainer").innerHTML = achensHTML;
