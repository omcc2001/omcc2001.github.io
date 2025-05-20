var contacts = [
    {
        name: "Vineetha Thomas", 
        role: "OMCC Coordinator", 
        email: "omcc2001@gmail.com",
        image: "vineetha-thomas.webp",
    },
    {
        name: "Jacob Chacko", 
        role: "Treasurer", 
        email: "",
        image: "",
    },
    {
        name: "Gigi Mathew",
        role: "CSI Representative",
        email: "",
        image: "",
    },
    {
        name: "Lloyd George",
        role: "Jacobite Representative",
        email: "",
        image: "",
    },
    {
        name: "Libu George Thomas",
        role: "Mar Thoma Representative",
        email: "",
        image: "",
    },
    {
        name: "Lloyd George",
        role: "Choir Coordinator",
        email: "",
        image: "",
    },
    {
        name: "Dr. Jason David",
        role: "Prayer Meeting Coordinator",
        email: "",
        image: "",
    },
    {
        name: "Keziah Uthup",
        role: "Sunday School Coordinator",
        email: "",
        image: "",
    },
    {
        name: "Ajish Poonthuruthiyil",
        role: "Auditor",
        email: "",
        image: "",
    },
    {
        name: "Ben Kurian",
        role: "Web Admin",
        email: "bkuroh17@gmail.com",
        image: "ben-kurian.webp",
    },
];
// HTML string to hold the generated content
var contactsHTML = `<p class="lead text-center">Email: <a href="mailto:omcc2001@gmail.com" target="_blank">omcc2001@gmail.com</a>`;

// Generating HTML for each contact
contacts.forEach(function(contact) {
    contactsHTML += `
    <div class='card m-3 shadow' style='width: 18rem;'>
    <img oncontextmenu="return false;" onerror="if (this.src != '/images/compressed/contactus/${contact.image}') this.src = '/images/original/contactus/placeholder.png';" loading="lazy" src='/images/compressed/contactus/${contact.image}' class='mt-3 rounded w-100 h-100' alt='${contact.name}' style='object-fit: cover;'>
    <div class="card-body">
        <h5 class="card-title">${contact.name}
        `;
        if(contact.email != "") {
            contactsHTML += `&nbsp;<a href="mailto:${contact.email}"><i class="fa-solid fa-envelope"></i></h5></a>`;
        }
        contactsHTML+= `</h5><p class="card-text text-secondary">${contact.role}</p>
    </div>
    </div>
    `;
});

// Closing tag for container div
contactsHTML += `</div>`;

// Displaying generated HTML for contacts
document.getElementById("contactsContainer").innerHTML = contactsHTML;
