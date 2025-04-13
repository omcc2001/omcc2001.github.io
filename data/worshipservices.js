var worshipservices = [
    {
        date: new Date("2024-02-24"), 
        time: "9:30 AM", 
        denomination: "Mar Thoma", 
        priest:"Rev. Joymon SK",
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2024-01-27"), 
        time: "9:30 AM", 
        denomination: "Mar Thoma", 
        priest:"Rev. Joymon SK",
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2024-03-23"), 
        time: "9:30 AM", 
        denomination: "Mar Thoma", 
        priest:"Rev. Joymon S.K.",
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2024-04-27"), 
        time: "9:30 AM", 
        denomination: "CSI", 
        priest:"Rev. Dr. Itty Mathews",
        location: SACC, 
        notes: "Annual General Body Meeting"
    },
    {
        date: new Date("2024-05-04"), 
        time: "9:30 AM", 
        denomination: "Jacobite", 
        priest:"Rev. Varghese P. Kuriakose",
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2024-05-25"), 
        time: "9:30 AM", 
        denomination: "Mar Thoma", 
        priest:"Rev. Joymon S.K.",
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2024-06-22"), 
        time: "4:00 PM", 
        denomination: "Mar Thoma", 
        priest:"Rev. Joymon S.K.",
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2024-07-27"), 
        time: "9:30 AM", 
        denomination: "Mar Thoma", 
        priest:"Rev. Joymon S.K.",
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2024-08-24"), 
        time: "9:30 AM", 
        denomination: "Mar Thoma", 
        priest:"Rev. Joymon S.K.",
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2024-09-21"), 
        time: "9:30 AM", 
        denomination: "Mar Thoma", 
        priest:"Rev. Joymon S.K.",
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2024-10-26"), 
        time: "9:30 AM", 
        denomination: "Mar Thoma", 
        priest:"Rev. Joymon S.K.",
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2024-12-14"), 
        time: "6:00 PM", 
        denomination: "", 
        priest:"",
        location: SACC, 
        notes: "Christmas Service"
    },
    {
        date: new Date("2025-01-25"), 
        time: "9:30 AM", 
        denomination: "Mar Thoma", 
        priest:"Rev. Joymon S.K.",
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2025-02-22"), 
        time: "9:30 AM", 
        denomination: "Mar Thoma", 
        priest:"Rev. Joymon S.K.",
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2025-02-22"), 
        time: "9:30 AM", 
        denomination: "Mar Thoma", 
        priest:"Rev. Joymon S.K.",
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2025-03-15"), 
        time: "4:30 PM", 
        denomination: "Mar Thoma", 
        priest:"Rev. Joymon S.K.",
        location: SACC, 
        notes: "Achen's Farewell Service"
    },
    {
        date: new Date("2025-04-12"), 
        time: "9:30 AM", 
        denomination: "Mar Thoma", 
        priest:"Rev. Joymon S.K.",
        location: SACC, 
        notes: "Annual General Body Meeting"
    },
    {
        date: new Date("2025-04-19"), 
        time: "09:45 AM", 
        denomination: "CSI", 
        priest:"Rev. Varghese Padiara Joseph",
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2025-05-03"), 
        time: "08:30 AM", 
        denomination: "Jacobite", 
        priest:"Rev. Fr. Movin Varghese",
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2025-05-24"), 
        time: "09:30 AM", 
        denomination: "Mar Thoma", 
        priest:"Rev. Kurian Jose",
        location: SACC, 
        notes: ""
    },
];


// Sorting and reversing the array
worshipservices.sort((a, b) => a.date - b.date).reverse();

// Function to adjust the date by adding one day
function adjustDate(date) {
    const adjustedDate = new Date(date);
    adjustedDate.setDate(adjustedDate.getDate() + 1); // Add one day
    return adjustedDate.toString().substring(0, 15); // Format as "Day Month Date Year"
}

// Function to generate table rows for worship services
function generateWorshipTableRows(page, itemsPerPage) {
    var start = (page - 1) * itemsPerPage;
    var end = start + itemsPerPage;
    var paginatedServices = worshipservices.slice(start, end);

    var rows = '';
    paginatedServices.forEach(service => {
        rows += `
        <tr>
            <td>${adjustDate(service.date)}</td>
            <td>${service.time}</td>
            <td>${service.denomination}</td>
            <td>${service.priest}</td>
            <td>${service.location}</td>
            <td>${service.notes}</td>
        </tr>
        `;
    });
    return rows;
}

// Function to generate pagination for worship services
function generateWorshipPagination(page, itemsPerPage) {
    var totalPages = Math.ceil(worshipservices.length / itemsPerPage);
    var paginationHTML = `<nav aria-label="Page navigation">
                            <ul class="pagination justify-content-center">`;
    
    for (var i = 1; i <= totalPages; i++) {
        paginationHTML += `<li class="page-item ${i === page ? 'active' : ''}">
                                <a class="page-link" href="#worshipservices" onclick="changeWorshipPage(${i})">${i}</a>
                            </li>`;
    }
    
    paginationHTML += `</ul></nav>`;
    return paginationHTML;
}

// Function to change the page for worship services
function changeWorshipPage(page) {
    var itemsPerPage = 5; // Number of items per page
    var tableHTML = `
    <table class='table table-sm table-hover table-responsive'>
        <thead>
            <tr>
                <th scope='col'>Date</th>
                <th scope='col'>Time</th>
                <th scope='col'>Denomination</th>
                <th scope='col'>Priest</th>
                <th scope='col'>Location</th>
                <th scope='col'>Notes</th>
            </tr>
        </thead>
        <tbody>
            ${generateWorshipTableRows(page, itemsPerPage)}
        </tbody>
    </table>`;
    
    var paginationHTML = generateWorshipPagination(page, itemsPerPage);
    
    document.getElementById("wsTable").innerHTML = tableHTML + paginationHTML;
}

// Initial load for worship services
changeWorshipPage(1);