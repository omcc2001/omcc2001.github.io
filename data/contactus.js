var contacts = [
    {
        name: "John Thomas", 
        role: "OMCC Coordinator", 
        image: "",
    },
    {
        name: "Anitha Varughese", 
        role: "Treasurer", 
        image: "",
    },
    {
        name: "Mercy Thomas",
        role: "CSI Representative",
        image: "",
    },
    {
        name: "Jobin David",
        role: "Jacobite Representative",
        image: "",
    },
    {
        name: "Dr. Jisna Paul",
        role: "Mar Thoma Representative",
        image: "",
    },
    {
        name: "Mercy Thomas",
        role: "Choir Coordinator",
        image: "",
    },
    {
        name: "Santhosh Varughese",
        role: "Prayer Meeting Coordinator",
        image: "",
    },
    {
        name: "Sophia Pothen",
        role: "Sunday School Coordinator",
        image: "",
    },
    {
        name: "Rajiv Thomas",
        role: "Auditor",
        image: "",
    },
    {
        name: "Ben Kurian",
        role: "Web Admin",
        image: "",
    },
];
// HTML string to hold the generated content
var contactsHTML = ``;

// Generating HTML for each contact
contacts.forEach(function(contact) {
    contactsHTML += `
    <div class='card m-3' style='width: 18rem;'>
    <!-- <img class="card-img-top" src="..." alt="${contact.name}"> -->
    <div class="card-body">
        <h5 class="card-title">${contact.name}</h5>
        <p class="card-text text-secondary">${contact.role}</p>
    </div>
    </div>
    `;
});

// Closing tag for container div
contactsHTML += `</div>`;

// Displaying generated HTML for contacts
document.getElementById("contactsContainer").innerHTML = contactsHTML;
