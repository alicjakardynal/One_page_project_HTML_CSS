document.addEventListener("DOMContentLoaded", function() {

    const input = document.querySelector('.input_personal');
    input.addEventListener('click', function() {
        const div = this.firstElementChild.firstElementChild;
        if (div.style.display !== "block") {
            div.style.display = "block"
        } else {
            div.style.display = "none"
        }
    })

});