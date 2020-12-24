const refs = {
    body: document.querySelector('body'),
    label: document.querySelector('.theme-switch__track'),
    div: document.querySelector('.theme-switch__marker')
};
// console.log(refs.body);

const savedTheme = localStorage.getItem('variable-theme');
const savedDiv = localStorage.getItem('position-div');

const returnThemeLocalStorage = () => {
    if (savedTheme) {
        refs.body.className = savedTheme;
        console.log(refs.body.className);
    } else {
        console.log('Hello!');//Для перевірки
    };
};

const returnDivLocalStorage = () => {
    if (savedDiv) {
        refs.div.checked = savedDiv;
        console.log(refs.div.checked);
    } else {
        console.log('Hi!');//Для перевірки
    };
};


returnThemeLocalStorage();
returnDivLocalStorage();

refs.body.addEventListener('change', handleBodyTheme);
refs.div.addEventListener('change', handleDivChecked);


function handleBodyTheme() {
    const variableTheme = refs.body.className;
    localStorage.setItem('variable-theme', variableTheme);
};

function handleDivChecked() {
    const positionDiv = refs.div.checked;
    localStorage.setItem('position-div', positionDiv);
};