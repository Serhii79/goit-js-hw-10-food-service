const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

bodyRef.classList.add(Theme.LIGHT);

const toggleBackground = () => {
    bodyRef.classList.toggle(Theme.DARK); 
};

inputRef.addEventListener('change', toggleBackground);