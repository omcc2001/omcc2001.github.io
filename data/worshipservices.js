import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://mwajpetsjmdgxoxzqfgl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13YWpwZXRzam1kZ3hveHpxZmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3ODE4NzMsImV4cCI6MjA3MjM1Nzg3M30.iZ-zRUyg2ra8PIRXKOaxLviuvM5c-jz58wM1Sahvr00";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let worshipServices = [];

async function loadWorshipServices() {
    try {
        const now = new Date();
        const firstOfYear = new Date(now.getFullYear(), 0, 1).toISOString(); // Jan 1 current year

        const { data, error } = await supabase
            .from('worship_services')
            .select('*')
            .gte('date', firstOfYear)           // filter: current year and future
            .order('date', { ascending: false }); // latest events first

        if (error) throw error;

        if (!data || data.length === 0) {
            document.getElementById("wsTable").innerHTML = "<p>No Worship Services found.</p>";
            console.log("No events returned from Supabase.");
            return;
        }

        worshipServices = data.map(event => {
            const dt = new Date(event.date);
            
            // Convert to EST for display
            const dateStr = dt.toLocaleDateString('en-US', {
                weekday: 'short', month: 'short', day: 'numeric', year: 'numeric',
                timeZone: 'America/New_York'
            });
            const timeStr = dt.toLocaleTimeString('en-US', {
                hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York'
            });

            // Location HTML
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
                denomination: event.denomination || "",
                priest: event.priest || "",
                location: locationHTML,
                notes: event.notes || ""
            };
        });

        changeWorshipPage(1);

    } catch (err) {
        console.error("Error fetching Worship Services:", err);
        document.getElementById("wsTable").innerHTML = "<p>Error loading events.</p>";
    }
}

function generateWorshipTableRows(page, itemsPerPage) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginated = worshipServices.slice(start, end);

    return paginated.map(service => `
        <tr>
            <td>${service.date}</td>
            <td>${service.time}</td>
            <td>${service.denomination}</td>
            <td>${service.priest}</td>
            <td>${service.location}</td>
            <td>${service.notes}</td>
        </tr>
    `).join('');
}

function generateWorshipPagination(page, itemsPerPage) {
    const totalPages = Math.ceil(worshipServices.length / itemsPerPage);
    let paginationHTML = `<nav aria-label="Page navigation"><ul class="pagination justify-content-center">`;
    
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<li class="page-item ${i === page ? 'active' : ''}">
            <a class="page-link" href="#worshipservices" onclick="changeWorshipPage(${i})">${i}</a>
        </li>`;
    }
    
    paginationHTML += `</ul></nav>`;
    return paginationHTML;
}

window.changeWorshipPage = function(page) {
    const itemsPerPage = 5;
    const tableHTML = `
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

    const paginationHTML = generateWorshipPagination(page, itemsPerPage);
    document.getElementById("wsTable").innerHTML = tableHTML + paginationHTML;
}

// Load worship services after DOM is ready
document.addEventListener('DOMContentLoaded', loadWorshipServices);
