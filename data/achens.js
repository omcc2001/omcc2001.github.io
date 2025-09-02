import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// 1️⃣ Initialize Supabase client
const SUPABASE_URL = "https://mwajpetsjmdgxoxzqfgl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13YWpwZXRzam1kZ3hveHpxZmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3ODE4NzMsImV4cCI6MjA3MjM1Nzg3M30.iZ-zRUyg2ra8PIRXKOaxLviuvM5c-jz58wM1Sahvr00";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 2️⃣ Fetch and render achens
async function loadAchens() {
    const { data: achens, error } = await supabase
        .from('achens')
        .select('*')
        .order('id', { ascending: true }); // <-- order by id ascending

    if (error) {
        console.error('Error fetching achens:', error);
        return;
    }

    if (!achens || achens.length === 0) {
        document.getElementById("achensContainer").innerHTML = "<p>No achens found.</p>";
        return;
    }

    const achensHTML = achens.map((achen) => `
        <div class='card m-3 shadow' style='width: 25rem;'>
            <img 
                oncontextmenu="return false;" 
                onerror="this.src='https://mwajpetsjmdgxoxzqfgl.supabase.co/storage/v1/object/public/achens/placeholder.png';" 
                loading="lazy" 
                src='https://mwajpetsjmdgxoxzqfgl.supabase.co/storage/v1/object/public/achens/${achen.image || "placeholder.png"}' 
                class='mt-3 rounded w-100 h-100' 
                alt='${achen.name || "Achen"}' 
                style='object-fit: cover;'>
            <div class="card-body">
                <h5 class="card-title">${achen.name || ""}</h5>
                <p class="card-text text-secondary">${achen.denomination || ""}</p>
                <p class="card-text">${achen.parish || ""}</p>
            </div>
        </div>
    `).join('');

    document.getElementById("achensContainer").innerHTML = achensHTML;
}

// 3️⃣ Load achens after DOM is ready
document.addEventListener('DOMContentLoaded', loadAchens);
