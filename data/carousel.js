var folder = ["vbs24", 12, "Vacation Bible School 2024 (8/10-11/2024)"];
var carouselHTML = `<p class="text-center text-secondary my-3">${folder[2]}</p>`;
var prevFolders = [["vbs23", 15, "Vacation Bible School 2023 (8/5-6/2023)"], ["mercyfarewell", 10, "Worship Service & Farewell (4/27/2024)"]];

for (var i = 1; i <= folder[1]; i++) {
    carouselHTML += `<div class="carousel-item${i === 1 ? ' active' : ''}" data-bs-interval="2000">
                        <img oncontextmenu="return false;" loading="eager" src="/images/compressed/carousel/${folder[0]}/${i}.webp" class="d-block w-100">
                    </div>`;
}
document.getElementById("carouselContainer").innerHTML = carouselHTML;