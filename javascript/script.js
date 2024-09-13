function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

// Mudar texto do Dark Mode On Light Mode On

function changeText() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if (button.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = '';
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = '';
}

//  Variaveis e evento de clique

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

// Add CSS styles to position the elements in the top left corner
button.style.position = 'absolute';
button.style.top = '0';
button.style.left = '0';

button.addEventListener('click', changeMode);

// Scroll to element
const scrollToPortfolio = () => {
    document.getElementById("portfolio").scrollIntoView({ behaviour: "smooth" });
}
const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Add event listener to scroll to contact on button click
button.addEventListener('click', scrollToContact);
function showLoading() {
    document.getElementById('loading-overlay').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading-overlay').style.display = 'none';
}

function loadPage(event, url) {
    event.preventDefault(); // Stop de normale linkactie
    showLoading();

    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            hideLoading();
        })
        .catch(err => {
            console.warn('Er is iets fout gegaan.', err);
            hideLoading();
        });
}