const refs = {
    input: document.querySelector('#theme-switch-toggle')
}

const savedMessage = localStorage.getItem('feedback-message');

const returnLocalStorage = () => {
    if (savedMessage) {
        refs.input.checked = savedMessage;
        console.log(refs.input.checked);
    } else {
        console.log('Hello');
    }
};

returnLocalStorage();
refs.input.addEventListener('input', handleInputChecked);

function handleInputChecked() {
    const message = refs.input.checked;
    localStorage.setItem('feedback-message', message);
}