var carouselHTML = ``;
var folder = ["vbs23", 15];

for (var i = 1; i <= folder[1]; i++) {
    carouselHTML += `<div class="carousel-item${i === 1 ? ' active' : ''}" data-bs-interval="2000">
                        <img oncontextmenu="return false;" loading="eager" src="/images/compressed/carousel/${folder[0]}/${i}.webp" class="d-block w-100">
                    </div>`;
}

document.getElementById("carouselContainer").innerHTML = carouselHTML;