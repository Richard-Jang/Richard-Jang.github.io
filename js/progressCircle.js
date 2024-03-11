

rendered = false

function viewOnScroll(renderIn, renderOut, identifier) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !rendered) {
                rendered = true
                entry.target.classList.remove(renderOut);
                entry.target.classList.add(renderIn);

                const rating = document.getElementsByClassName('ticks')[0];
                const tick = document.getElementsByClassName('tick');

                for (var i = 1; i < 100; i++) {
                    rating.innerHTML += "<div class='tick'></div>";
                    tick[i].style.transform = "rotate("+ 3.6 * i +"deg)";
                    tick[i].style.animationDelay = `${i/75}s`;
                }

                const counter = document.querySelector('.counter');
                counter.innerText = 0;

                const target = +counter.getAttribute('data-target');

                const NumberCounter= () => {
                    const value = +counter.innerText;
                    if (value < target){
                        counter.innerText = Math.ceil(value + 1);
                        setTimeout(() => {
                            NumberCounter()
                        }, 20)
                    }
                }

                NumberCounter()
            }
        });
    });

    const hiddenElements = document.querySelectorAll(identifier);
    hiddenElements.forEach((el) => observer.observe(el));
}

viewOnScroll('fadeIn', 'disappear', '.FadeInProgress');