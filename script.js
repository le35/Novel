const body = document.body;
function toggleDarkMode(){
    body.classList.toggle('dark-mode');
}

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')
$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})