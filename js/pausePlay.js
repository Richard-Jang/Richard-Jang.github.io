// Play <i class="bi bi-play-fill"></i> True when autoplay false
// Pause <i class="bi bi-pause-fill"></i> True when autoplay true

const pausePlay = (target, targetButton) => {

    const targetElement = document.getElementById(target);
    let targetAttribute = ""
    targetElement.onload = () => {
        targetAttribute = targetElement.getAttribute('data-bs-interval');
    }
    //let targetAttribute = targetElement.onload = () => {targetElement.getAttribute('data-bs-interval');}
    let buttonElement = document.getElementById(targetButton);
    console.log(targetAttribute);

    if (targetAttribute == "3000") {
        buttonElement.innerHTML = '<i class="bi bi-play-fill"></i>';
        targetElement.setAttribute("data-bs-interval", "100");
    } else {
        buttonElement.innerHTML = '<i class="bi bi-pause-fill"></i>';
        targetElement.setAttribute("data-bs-interval", "3000");
    }


}
