/*const refs = {
    body: document.querySelector('body'),
    label: document.querySelector('.theme-switch__track'),
    div: document.querySelector('.theme-switch__marker')
};

const savedTheme = localStorage.getItem('variable-theme');

const returnThemeLocalStorage = () => {
    if (savedTheme) {
        refs.body.className = savedTheme;
        console.log(refs.body.className);
    } else {
        console.log('Hello!');//Для перевірки
    };
};

returnThemeLocalStorage();

refs.body.addEventListener('change', handleBodyTheme);

function handleBodyTheme() {
    const variableTheme = refs.body.className;
    localStorage.setItem('variable-theme', variableTheme);
};*/

const THEME_KEY_NAME = 'variable-theme';

export const loadThemeName = () => localStorage.getItem(THEME_KEY_NAME);

export const saveThemeName = theme => localStorage.setItem(THEME_KEY_NAME, theme);