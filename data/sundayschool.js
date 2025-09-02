import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://mwajpetsjmdgxoxzqfgl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13YWpwZXRzam1kZ3hveHpxZmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3ODE4NzMsImV4cCI6MjA3MjM1Nzg3M30.iZ-zRUyg2ra8PIRXKOaxLviuvM5c-jz58wM1Sahvr00";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let sundaySchoolEvents = [];

async function loadSundaySchool() {
    try {
        const now = new Date();
        const todayISO = now.toISOString(); // current date-time in UTC

        const { data, error } = await supabase
            .from('sunday_school')
            .select('*')
            .gte('date', todayISO)            // Only today and future events
            .order('date', { ascending: true });

        if (error) throw error;

        if (!data || data.length === 0) {
            document.getElementById("ssTable").innerHTML = "<p>No Sunday School events found.</p>";
            console.log("No events returned from Supabase.");
            return;
        }

        sundaySchoolEvents = data.map(event => {
            const dt = new Date(event.date);
            const dateStr = dt.toLocaleDateString('en-US', {
                weekday: 'short', month: 'short', day: 'numeric', year: 'numeric',
                timeZone: 'America/New_York'
            });
            const timeStr = dt.toLocaleTimeString('en-US', {
                hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York'
            });

            let locationHTML = "";
            if (event.location === "SACC") {
                locationHTML = `<a href='https://www.google.com/maps/place/1980+Swansford+Dr,+Dublin,+OH+43016' data-bs-toggle='tooltip' data-bs-title='1980 Swansford Dr, Dublin, OH 43016'>SACC</a> <i class='fa-solid fa-church'></i>`;
            } else if (event.location === "ZOOM") {
                locationHTML = "Zoom <i class='fa-solid fa-video'></i>";
            } else {
                locationHTML = event.location || "";
            }

            return {
                date: dateStr,
                time: timeStr === '12:00 AM' ? 'TBD' : timeStr,
                location: locationHTML,
                notes: event.notes || ""
            };
        });

        changeSundayPage(1);

    } catch (err) {
        console.error("Error fetching Sunday School events:", err);
        document.getElementById("ssTable").innerHTML = "<p>Error loading events.</p>";
    }
}

window.changeSundayPage = function(page) {
    const itemsPerPage = 5;
    const tableHTML = `
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
            ${sundaySchoolEvents.slice((page-1)*itemsPerPage, page*itemsPerPage).map(e => `
                <tr>
                    <td>${e.date}</td>
                    <td>${e.time}</td>
                    <td>${e.location}</td>
                    <td>${e.notes}</td>
                </tr>`).join('')}
        </tbody>
    </table>`;

    const totalPages = Math.ceil(sundaySchoolEvents.length / itemsPerPage);
    let paginationHTML = `<nav aria-label="Page navigation"><ul class="pagination justify-content-center">`;
    for (let i=1; i<=totalPages; i++) {
        paginationHTML += `<li class="page-item ${i===page?'active':''}">
            <a class="page-link" href="#sundayschool" onclick="changeSundayPage(${i})">${i}</a></li>`;
    }
    paginationHTML += `</ul></nav>`;

    document.getElementById("ssTable").innerHTML = tableHTML + paginationHTML;
}

// Load Sunday School events after DOM is ready
document.addEventListener('DOMContentLoaded', loadSundaySchool);
