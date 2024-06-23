var prayermeetings = [ 
    {
        date: new Date("2024-10-05"), 
        time: "4:00 PM", 
        host: "Rajani & Jacob Naduparambil", 
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

// Sorting the worshipservices array by date in ascending order
prayermeetings.sort((a, b) => b.date - a.date);

// Adding table with data to HTML
var tableHTML = `
<table class='table table-sm table-hover table-responsive'>
<thead>
<tr>
<th scope='col'>Date</th>
<th scope='col'>Time</th>
<th scope='col'>Host</th>
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
        <td>${prayermeetings[i].host}</td>
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
