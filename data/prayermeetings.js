var prayermeetings = [ 
    {
        date: new Date("2025-07-20"), 
        time: "TBD", 
        host: "<a href='https://maps.app.goo.gl/vwgytLfKZsQkTrW4A' target='_blank'>Maple Shelter, Alum Creek Lower Dam Area</a>", 
        notes: "OMCC Picnic"
    },
    {
        date: new Date("2025-06-14"), 
        time: "5:00 PM", 
        host: "Preetha & Thomas Pullumpallil", 
        notes: ""
    },
    {
        date: new Date("2025-04-13"), 
        time: "5:00 PM", 
        host: "Preetha & Kurian Uthup", 
        notes: ""
    },
    {
        date: new Date("2025-02-01"), 
        time: "5:00 PM", 
        host: "Rajani & Jacob Naduparambil", 
        notes: ""
    },
    {
        date: new Date("2024-11-02"), 
        time: "5:00 PM", 
        host: "Sheena & Lloyd George", 
        notes: ""
    },
    {
        date: new Date("2024-10-05"), 
        time: "7:00 PM", 
        host: "", 
        notes: "Zoom"
    },
    {
        date: new Date("2024-09-07"), 
        time: "5:00 PM", 
        host: "Drs. Jisna & Matthew Cherian", 
        notes: ""
    },
    {
        date: new Date("2024-08-10"), 
        time: "4:00 PM", 
        host: "Anitha & Santosh Varughese", 
        notes: ""
    },
    {
        date: new Date("2024-07-06"), 
        time: "4:00 PM", 
        host: "Jimcy & Jacob Jayan", 
        notes: ""
    },
    {
        date: new Date("2024-05-11"), 
        time: "4:00 PM", 
        host: "Bindya & Bright Devakadaksham Lilly", 
        notes: ""
    },
    {
        date: new Date("2023-05-10"), 
        time: "4:00 PM", 
        host: "Abraham & Mercy Thomas", 
        notes: ""
    },
    {
        date: new Date("2023-06-08"), 
        time: "4:00 PM", 
        host: "Preetha & Thomas Pullampallil", 
        notes: ""
    },
    {
        date: new Date("2023-07-06"), 
        time: "4:00 PM", 
        host: "Jimcy & Jacob Jayan", 
        notes: ""
    },
    {
        date: new Date("2023-08-10"), 
        time: "4:00 PM", 
        host: "Anitha & Santhosh Varughese", 
        notes: ""
    },
];

// Sorting and reversing the array
prayermeetings.sort((a, b) => a.date - b.date).reverse();

// Function to adjust the date by adding one day
function adjustDate(date) {
    const adjustedDate = new Date(date);
    adjustedDate.setDate(adjustedDate.getDate() + 1); // Add one day
    return adjustedDate.toString().substring(0, 15); // Format as "Day Month Date Year"
}

// Function to generate table rows for prayer meetings
function generatePrayerTableRows(page, itemsPerPage) {
    var start = (page - 1) * itemsPerPage;
    var end = start + itemsPerPage;
    var paginatedMeetings = prayermeetings.slice(start, end);

    var rows = '';
    paginatedMeetings.forEach(meeting => {
        rows += `
        <tr>
            <td>${adjustDate(meeting.date)}</td>
            <td>${meeting.time}</td>
            <td>${meeting.host}</td>
            <td>${meeting.notes}</td>
        </tr>
        `;
    });
    return rows;
}

// Function to generate pagination for prayer meetings
function generatePrayerPagination(page, itemsPerPage) {
    var totalPages = Math.ceil(prayermeetings.length / itemsPerPage);
    var paginationHTML = `<nav aria-label="Page navigation">
                            <ul class="pagination justify-content-center">`;
    
    for (var i = 1; i <= totalPages; i++) {
        paginationHTML += `<li class="page-item ${i === page ? 'active' : ''}">
                                <a class="page-link" href="#prayermeetings" onclick="changePrayerPage(${i})">${i}</a>
                            </li>`;
    }
    
    paginationHTML += `</ul></nav>`;
    return paginationHTML;
}

// Function to change the page for prayer meetings
function changePrayerPage(page) {
    var itemsPerPage = 5; // Number of items per page
    var tableHTML = `
    <table class='table table-sm table-hover table-responsive'>
        <thead>
            <tr>
                <th scope='col'>Date</th>
                <th scope='col'>Time</th>
                <th scope='col'>Host/Address</th>
                <th scope='col'>Notes</th>
            </tr>
        </thead>
        <tbody>
            ${generatePrayerTableRows(page, itemsPerPage)}
        </tbody>
    </table>`;
    
    var paginationHTML = generatePrayerPagination(page, itemsPerPage);
    
    document.getElementById("pmTable").innerHTML = tableHTML + paginationHTML;
}

// Initial load for prayer meetings
changePrayerPage(1);