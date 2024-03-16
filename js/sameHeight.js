const sameHeight = (className) => {
    elements = document.querySelectorAll(className);
    let height = [];
    elements.forEach(element => {
        element.style.height = 'auto';
        height.push(element.offsetHeight);
    });
    height = height.sort().reverse()
    elements.forEach(element => {

        element.style.height = height[0] + 'px';

    });
}

sameHeight('.activities')