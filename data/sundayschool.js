var sundayschool = [ 
    {
        date: new Date("2024-03-28"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2024-04-07"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2024-04-14"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2024-04-21"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2024-04-28"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2024-05-05"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2024-05-12"), 
        time: "12:00 PM", 
        location: SACC, 
        notes: "Diocesan Exam"
    },
    {
        date: new Date("2024-08-10"), 
        time: "TBD", 
        location: SACC, 
        notes: "OMCC VBS: Day 1"
    },
    {
        date: new Date("2024-08-11"), 
        time: "TBD", 
        location: SACC, 
        notes: "OMCC VBS: Day 2"
    },
    {
        date: new Date("2024-09-08"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: "First Day"
    },
    {
        date: new Date("2024-09-15"), 
        time: "2:00 PM", 
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2024-09-22"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: "World Sunday School Day Song Practice"
    },
    {
        date: new Date("2024-09-29"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: "World Sunday School Day Song Practice"
    },
    {
        date: new Date("2024-10-06"), 
        time: "2:00 PM", 
        location: SACC, 
        notes: "World Sunday School Day Song Recording"
    },
    {
        date: new Date("2024-10-13"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2024-10-20"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2024-10-27"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2024-11-3"), 
        time: "2:00 PM", 
        location: SACC, 
        notes: ""
    },
    {
        date: new Date("2024-11-10"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: "Christmas Program Practice"
    },
    {
        date: new Date("2024-11-17"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: "Christmas Program Practice"
    },
    {
        date: new Date("2024-11-23"), 
        time: "2:00 PM", 
        location: SACC, 
        notes: "Christmas Program Practice"
    },
    {
        date: new Date("2024-11-24"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: "TBD"
    },
    {
        date: new Date("2024-12-08"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-01-05"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-01-12"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-01-19"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-01-19"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-01-26"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-02-02"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-02-09"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-02-16"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-02-23"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-03-02"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-03-09"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-03-16"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-03-23"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-04-06"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-04-13"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-04-27"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-05-04"), 
        time: "2:00 PM", 
        location: ZOOM, 
        notes: ""
    },
    {
        date: new Date("2025-05-11"), 
        time: "2:00 PM", 
        location: "", 
        notes: "Last Day"
    },
];

// Sorting the worshipservices array by date in ascending order
sundayschool.sort((a, b) => b.date - a.date);

// Adding table with data to HTML
var tableHTML = `
<table class='table table-sm table-hover table-responsive'>
<thead>
<tr>
<th scope='col'>Date</th>
<th scope='col'>Time</th>
<th scope='col'>Location</th>
<th scope='col'>Notes</th>
</tr>
</thead>
<tbody>
`;

var futureCount = 0;
for(var i = sundayschool.length - 1; i >= 0 && futureCount < 12; i--)
{
    if(sundayschool[i].date.setHours(24, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0)) {
        tableHTML += `
        <tr>
        <td>${sundayschool[i].date.toString().substring(0,15)}</td>
        <td>${sundayschool[i].time}</td>
        <td>${sundayschool[i].location}</td>
        <td>${sundayschool[i].notes}</td>
        </tr>
        `; 
        futureCount++;
    }

}

if(futureCount > 0) {
    tableHTML += `</tbody></table>`;
} else {
    // Message for no data
    tableHTML = `<p class='lead text-center'>No Sunday School sessions scheduled<p>`;
}
// Set div's innerHTML to new HTML
document.getElementById("ssTable").innerHTML = tableHTML;
