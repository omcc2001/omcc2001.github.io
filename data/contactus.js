import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// 1️⃣ Initialize Supabase client
const SUPABASE_URL = "https://mwajpetsjmdgxoxzqfgl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13YWpwZXRzam1kZ3hveHpxZmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3ODE4NzMsImV4cCI6MjA3MjM1Nzg3M30.iZ-zRUyg2ra8PIRXKOaxLviuvM5c-jz58wM1Sahvr00";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 2️⃣ Fetch and render contacts
async function loadContacts() {
    const { data: contacts, error } = await supabase
        .from('contacts')
        .select('*')
        .order('id', { ascending: true }); // order by id

    if (error) {
        console.error('Error fetching contacts:', error);
        document.getElementById("contactsContainer").innerHTML = "<p>Error loading contacts.</p>";
        return;
    }

    if (!contacts || contacts.length === 0) {
        document.getElementById("contactsContainer").innerHTML = "<p>No contacts found.</p>";
        return;
    }

    // HTML string to hold the generated content
    let contactsHTML = `<p class="lead text-center">Email: <a href="mailto:omcc2001@gmail.com" target="_blank">omcc2001@gmail.com</a></p>`;

    // Generate HTML for each contact
    contacts.forEach(contact => {
        contactsHTML += `
        <div class='card m-3 shadow' style='width: 18rem;'>
            <img 
                oncontextmenu="return false;" 
                onerror="this.src='https://mwajpetsjmdgxoxzqfgl.supabase.co/storage/v1/object/public/contacts/placeholder.png';" 
                loading="lazy" 
                src='https://mwajpetsjmdgxoxzqfgl.supabase.co/storage/v1/object/public/contacts/${contact.image || "placeholder.png"}' 
                class='mt-3 rounded w-100 h-100' 
                alt='${contact.name || "Contact"}' 
                style='object-fit: cover;'>
            <div class="card-body">
                <h5 class="card-title">${contact.name || ""}`;
        if (contact.email) {
            contactsHTML += `&nbsp;<a href="mailto:${contact.email}"><i class="fa-solid fa-envelope"></i></a>`;
        }
        contactsHTML += `</h5>
                <p class="card-text text-secondary">${contact.role || ""}</p>
            </div>
        </div>
        `;
    });

    // Displaying generated HTML
    document.getElementById("contactsContainer").innerHTML = contactsHTML;
}

// 3️⃣ Load contacts after DOM is ready
document.addEventListener('DOMContentLoaded', loadContacts);
