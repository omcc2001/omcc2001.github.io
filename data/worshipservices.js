var worshipservices = [
    {
        date: new Date("2024-02-24"), 
        time: "9:30 AM", 
        denomination: "Mar Thoma", 
        priest:"Rev. Joymon S.K.",
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2024-01-27"), 
        time: "9:30 AM", 
        denomination: "Mar Thoma", 
        priest:"Rev. Joymon S.K.",
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
        date: new Date("2025-02-01"), 
        time: "9:30 AM", 
        denomination: "Jacobite", 
        priest:"Rev. Fr. Movin Varghese",
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
    }
];

// Sorting the worshipservices array by date in ascending order
worshipservices.sort((a, b) => b.date - a.date);

// Adding table with data to HTML
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
`;

var futureCount = 0;
for (var i = worshipservices.length - 1; i >= 0 && futureCount < 12; i--) {
    if(worshipservices[i].date.setHours(24,0,0,0) >= new Date().setHours(0,0,0,0)) {
        tableHTML += `
        <tr>
        <td>${worshipservices[i].date.toString().substring(0, 15)}</td>
        <td>${worshipservices[i].time}</td>
        <td>${worshipservices[i].denomination}</td>
        <td>${worshipservices[i].priest}</td>
        <td>${worshipservices[i].location}</td>
        <td>${worshipservices[i].notes}</td>
        </tr>
        `;
        futureCount++;
    }
}

if(futureCount > 0) {
    tableHTML += `</tbody></table>`;
} else {
    // Message for no data
    tableHTML = `<p class='lead text-center'>No worship services scheduled<p>`;
}

// Set div's innerHTML to new HTML
document.getElementById("wsTable").innerHTML = tableHTML;
