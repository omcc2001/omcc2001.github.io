// Folder name as a string
var folderName = "xmas24";
var carouselTitle = "Christmas Service 2024 (12/14/2024)";

var carouselHTML = `<p class="text-center text-secondary my-3">${carouselTitle}</p>`;

async function loadCarouselImages() {
    let i = 1;
    while (true) {
        const imageUrl = `https://mwajpetsjmdgxoxzqfgl.supabase.co/storage/v1/object/public/carousel/${folderName}/${i}.webp`;
        
        // Check if image exists
        try {
            const res = await fetch(imageUrl, { method: 'HEAD' });
            if (!res.ok) break; // Stop if image does not exist
        } catch {
            break; // Stop on network error
        }

        carouselHTML += `<div class="carousel-item${i === 1 ? ' active' : ''}" data-bs-interval="2000">
                            <img oncontextmenu="return false;" loading="eager" src="${imageUrl}" class="d-block w-100">
                        </div>`;
        i++;
    }

    document.getElementById("carouselContainer").innerHTML = carouselHTML;
}

// Load images
loadCarouselImages();
