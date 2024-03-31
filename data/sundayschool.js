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
