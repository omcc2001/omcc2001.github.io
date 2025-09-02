import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://mwajpetsjmdgxoxzqfgl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13YWpwZXRzam1kZ3hveHpxZmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3ODE4NzMsImV4cCI6MjA3MjM1Nzg3M30.iZ-zRUyg2ra8PIRXKOaxLviuvM5c-jz58wM1Sahvr00";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let specialEvents = [];

async function loadSpecialEvents() {
    try {
        const now = new Date();
        const firstOfYear = new Date(now.getFullYear(), 0, 1).toISOString(); // Jan 1 current year

        const { data, error } = await supabase
            .from('special_events')
            .select('*')
            .gte('date', firstOfYear)           // filter: current year and future
            .order('date', { ascending: false }); // latest events first

        if (error) throw error;

        if (!data || data.length === 0) {
            document.getElementById("pmTable").innerHTML = "<p>No events found.</p>";
            console.log("No events returned from Supabase.");
            return;
        }

        specialEvents = data.map(event => {
            const dt = new Date(event.date);
            // Format date and time in EST/EDT
            const dateStr = dt.toLocaleDateString('en-US', {
                weekday: 'short', month: 'short', day: 'numeric', year: 'numeric',
                timeZone: 'America/New_York'
            });
            const timeStr = dt.toLocaleTimeString('en-US', {
                hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York'
            });
            return {
                date: dateStr,
                time: timeStr === '12:00 AM' ? 'TBD' : timeStr,
                host: event.host || "",
                notes: event.notes || ""
            };
        });

        changeEventPage(1);

    } catch (err) {
        console.error("Error fetching special events:", err);
        document.getElementById("pmTable").innerHTML = "<p>Error loading events.</p>";
    }
}

window.changeEventPage = function(page) {
    const itemsPerPage = 5;
    const tableHTML = `
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
            ${specialEvents.slice((page-1)*itemsPerPage, page*itemsPerPage).map(e => `
                <tr>
                    <td>${e.date}</td>
                    <td>${e.time}</td>
                    <td>${e.host}</td>
                    <td>${e.notes}</td>
                </tr>`).join('')}
        </tbody>
    </table>`;

    const totalPages = Math.ceil(specialEvents.length / itemsPerPage);
    let paginationHTML = `<nav aria-label="Page navigation"><ul class="pagination justify-content-center">`;
    for (let i=1; i<=totalPages; i++) {
        paginationHTML += `<li class="page-item ${i===page?'active':''}">
            <a class="page-link" href="#specialevents" onclick="changeEventPage(${i})">${i}</a></li>`;
    }
    paginationHTML += `</ul></nav>`;

    document.getElementById("pmTable").innerHTML = tableHTML + paginationHTML;
}

// Load events after DOM is ready
document.addEventListener('DOMContentLoaded', loadSpecialEvents);
