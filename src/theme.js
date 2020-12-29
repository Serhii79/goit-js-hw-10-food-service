/*const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const toggleBackground = () => {
    if (inputRef.getAttribute("checked") !== true) {
        bodyRef.classList.toggle(Theme.DARK);
        bodyRef.classList.toggle(Theme.LIGHT);
    } else {
        bodyRef.classList.toggle(Theme.LIGHT);
        bodyRef.classList.toggle(Theme.DARK);
    };
};

inputRef.addEventListener('change', toggleBackground);*/

import { loadThemeName, saveThemeName } from './localstorage';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  bodyRef: document.querySelector('body'),
  inputRef: document.querySelector('#theme-switch-toggle'),
};

const savedTheme = loadThemeName() || Theme.LIGHT;

refs.bodyRef.className = savedTheme;

refs.bodyRef.addEventListener('change', handleBodyTheme);

if (savedTheme === Theme.DARK) {
  refs.inputRef.setAttribute('checked', 'checked');
}

refs.inputRef.addEventListener('change', toggleBackground);

function handleBodyTheme() {
  const variableTheme = refs.bodyRef.className;
  saveThemeName(variableTheme);
}

function toggleBackground() {
  refs.bodyRef.classList.toggle(Theme.DARK);
  refs.bodyRef.classList.toggle(Theme.LIGHT);
}