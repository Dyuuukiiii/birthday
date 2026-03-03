function expandImage(event, cardElement) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');

    const imgSrc = cardElement.querySelector('img').src;
    const title = cardElement.querySelector('h3').innerText;
    const desc = cardElement.querySelector('p').innerText;

    modalImg.src = imgSrc;
    modalImg.classList.remove('scale-150');
    modalImg.classList.replace('cursor-zoom-out', 'cursor-zoom-in');
    
    modalTitle.innerText = title;
    modalDesc.innerText = desc;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden'; 
}

function toggleZoom(imgElement) {
    if (imgElement.classList.contains('scale-150')) {
        imgElement.classList.remove('scale-150');
        imgElement.classList.replace('cursor-zoom-out', 'cursor-zoom-in');
    } else {
        imgElement.classList.add('scale-150');
        imgElement.classList.replace('cursor-zoom-in', 'cursor-zoom-out');
    }
}

function closeCard(event, force = false) {
    if (event.target.id === 'image-modal' || force) {
        const modal = document.getElementById('image-modal');
        modal.classList.remove('active');
        
        setTimeout(() => {
            modal.classList.add('hidden');
            document.getElementById('modal-img').classList.remove('scale-150');
        }, 300); 
        document.body.style.overflow = 'auto'; 
    }
}


window.addEventListener("DOMContentLoaded", function () {
    const stickers = document.querySelectorAll(".sticker");

    const positions = [
        { top: "110px", left: "8%", rotate: "-8deg" },
        { top: "140px", left: "25%", rotate: "6deg" },
        { top: "140px", right: "25%", rotate: "-6deg" },
        { top: "110px", right: "8%", rotate: "8deg" },

        { top: "45%", left: "4%", rotate: "5deg" },
        { top: "45%", right: "4%", rotate: "-5deg" },

        { bottom: "180px", left: "10%", rotate: "10deg" },
        { bottom: "150px", left: "30%", rotate: "-7deg" },
        { bottom: "150px", right: "30%", rotate: "7deg" },
        { bottom: "180px", right: "10%", rotate: "-10deg" },
    ];

    stickers.forEach((sticker, index) => {
        if (positions[index]) {
            const pos = positions[index];

            if (pos.top) sticker.style.top = pos.top;
            if (pos.bottom) sticker.style.bottom = pos.bottom;
            if (pos.left) sticker.style.left = pos.left;
            if (pos.right) sticker.style.right = pos.right;

            sticker.style.transform = `rotate(${pos.rotate})`;
        }
    });
});
