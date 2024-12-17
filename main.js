const options = getOptions();

function getOptions() {
    return document.querySelectorAll('.secao__rating .formulario .opcoes .opcao');
}

function removeSelected(array) {
    array.forEach(option => {
        option.classList.remove('ativo');
    })
}

function addClassActive(option) {
    option.classList.add('ativo');
}

function addRating(option) {
    let rating = document.getElementById('numero');
    rating.textContent = option.value;
}

function alternateElementActive(array) {
    removeSelected(options);

    array.forEach(option => {
        option.addEventListener('click', () => {
            const options = getOptions();
            removeSelected(options);
            addClassActive(option);
            addRating(option);
        })
    });

}

alternateElementActive(options);

const form = document.querySelector('.formulario');

function toggleSection(selector, action) {
    const section = document.querySelector(selector);
    section.classList[action]('hidden');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    toggleSection('.secao.secao__rating', 'add');
    toggleSection('.secao.secao__thankyou', 'remove');
});