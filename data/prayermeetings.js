var prayermeetings = [ 
    {
        date: new Date("2023-05-10"), 
        time: "4:00 PM", 
        location: "Abraham & Mercy Thomas", 
        notes: ""
    },

];

// Sorting the worshipservices array by date in ascending order
prayermeetings.sort((a, b) => a.date - b.date);

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
for(var i = prayermeetings.length - 1; i >= 0 && futureCount < 12; i--)
{
    if(prayermeetings[i].date.setHours(24, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0)) {
        tableHTML += `
        <tr>
        <td>${prayermeetings[i].date.toString().substring(0,15)}</td>
        <td>${prayermeetings[i].time}</td>
        <td>${prayermeetings[i].location}</td>
        <td>${prayermeetings[i].notes}</td>
        </tr>
        `; 
        futureCount++;
    }

}

if(futureCount > 0) {
    tableHTML += `</tbody></table>`;
} else {
    // Message for no data
    tableHTML = `<p class='lead text-center'>No Prayer Meetings scheduled<p>`;
}
// Set div's innerHTML to new HTML
document.getElementById("pmTable").innerHTML = tableHTML;
