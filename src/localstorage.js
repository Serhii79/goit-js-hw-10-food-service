const refs = {
    input: document.querySelector('#theme-switch-toggle')
}

const savedMessage = localStorage.getItem('position-flag');

const returnLocalStorage = () => {
    if (savedMessage) {
        refs.input.checked = savedMessage;
        console.log(refs.input.checked);
    };
};

returnLocalStorage();

refs.input.addEventListener('input', handleInputChecked);

function handleInputChecked() {
    const message = refs.input.checked;
    localStorage.setItem('position-flag', message);
}